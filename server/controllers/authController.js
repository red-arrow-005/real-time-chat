// controllers/authController.js
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.login = async (req, res) => {
    try {
        passport.authenticate('local', async (err, user, info) => {
            if (err) {
                return res.status(500).json({ message: 'Authentication error' });
            }
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            req.login(user, { session: false }, async (error) => {
                if (error) {
                    return res.status(500).json({ message: 'Login error' });
                }
                const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
                return res.json({ token });
            });
        })(req, res);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
