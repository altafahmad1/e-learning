const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    statement: {
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    part: {
        type: Number,
    },
    options: {
        type: [
            {
                option: {
                    type: String,
                    required: true
                },
                correct: {
                    type: Boolean,
                    default: false
                }
            }
        ],
        validate: v => Array.isArray(v) && v.length == 4,
    },
    feedbacks: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'           
            },
            text: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = Question =  mongoose.model('question', QuestionSchema);