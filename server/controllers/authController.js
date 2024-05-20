// controllers/authController.js
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.login = async (req, res) => {
    try {
        passport.authenticate('local', async (err, user, info) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Authentication error' });
            }
            if (!user) {
                return res.status(401).json({ success: false, message: 'Invalid username/email or password' });
            }
            req.login(user, { session: false }, async (error) => {
                if (error) {
                    return res.status(500).json({ success: false, message: 'Login error' });
                }
                const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
                res.json({ success: true, message: 'Login successfully', data: { user, token } });
            });
        })(req, res);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already in use' });
        }

        // Create a new user instance
        const newUser = new User({ username, email, password });

        // Save the user to the database
        await newUser.save();

        // Generate a JWT token
        const payload = { id: newUser._id, username: newUser.username, email: newUser.email };
        const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });

        // Respond with the token and user info
        res.status(201).json({ success: true, message: 'Registration successful', data: { user: payload, token } });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
};