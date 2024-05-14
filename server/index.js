const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const routes = require('./routes/index');
require('./config/passport')(passport); // Passport config

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/v1/api', routes);

// JWT Authentication Middleware for Socket.IO
io.use((socket, next) => {
    const token = socket.handshake.query.token;
    if (token) {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return next(new Error('Authentication error'));
            }
            socket.user = decoded;
            next();
        });
    } else {
        next(new Error('Authentication error'));
    }
});

// Socket.IO Connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.user.id);

    // Handle incoming messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', { user: socket.user.username, msg });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.user.id);
    });
});

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/chat-app').then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
