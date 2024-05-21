// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middlewares/middleware')

router.get('/profile', verifyToken, authController.getUserProfile);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.put('/update/profile', verifyToken, authController.updateUserProfile);

module.exports = router;
