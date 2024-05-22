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
        res.status(500).json({ success: false, message: 'Internal server error' });
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

exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.userId; // assuming we're fetching user by id

        // Find user by ID and populate the references
        const user = await User.findById(userId)
            .select('-password') // Exclude password field
            .populate('contacts', 'username email avatar') // Populate contacts with selected fields
            .populate('groups', 'name') // Populate groups with the name field
            .populate('blockedUsers', 'username email') // Populate blocked users with selected fields
            .populate({
                path: 'notifications.sender',
                select: 'username email avatar'
            }); // Populate notifications sender with selected fields

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            bio: user.bio,
            contacts: user.contacts,
            groups: user.groups,
            online: user.online,
            lastSeen: user.lastSeen,
            settings: user.settings,
            blockedUsers: user.blockedUsers,
            notifications: user.notifications,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };

        res.json({ success: true, message: 'Profile fetched successfully', data: payload });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const userId = req.userId; // Assuming you have middleware to extract userId from token
        const updatedProfile = req.body; // Updated profile data sent in the request body

        // Find user by ID and update the profile
        const user = await User.findByIdAndUpdate(userId, updatedProfile, { new: true });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, message: 'Profile updated successfully', data: user });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};