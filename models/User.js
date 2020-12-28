const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// To create User Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min:6
    },
    email: {
        type: String,
        required: true,
        min:6,
        max:256
    },
    date: {
        type: Date,
        required:true,
        default: Date.now()
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema);
