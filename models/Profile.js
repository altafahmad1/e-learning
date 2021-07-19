const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    country: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'unpaid'
    },
    bio: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    },
    education: [
        {
            degree: {
                type: String,
                required: true
            },
            fieldOfStudy: {
                type: String,
                required: true
            },
            from:{
                type: Date,
                required: true
            },
            to:{
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);