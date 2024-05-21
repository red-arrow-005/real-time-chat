// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    avatar: { type: String, default: 'default-avatar.png' },
    bio: { type: String, default: '' },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }], // Reference to messages
    incomingFriendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FriendRequest' }], // Incoming friend requests
    outgoingFriendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FriendRequest' }], // Outgoing friend requests
    online: { type: Boolean, default: false },
    lastSeen: { type: Date, default: Date.now },
    settings: {
        theme: { type: String, default: 'light' },
        notifications: { type: Boolean, default: true },
        sound: { type: Boolean, default: true },
    },
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    notifications: [{
        type: { type: String, enum: ['message', 'friendRequest', 'groupInvite'], required: true },
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        message: { type: String },
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
