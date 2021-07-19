const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('./../../middleware/auth');
const adminAuth = require('./../../middleware/adminAuth');
const Question = require('./../../models/Question');
const router = express.Router();

//@route        GET /api/questions
//@desc         To get all questions
//@access       Private (Admin Only)
router.get('/', adminAuth, async (req, res) => {
    try {
        const { category } = req.body;

        if ( category ) {
            const questions = await Question.find({ subject: category });
            return res.json(questions);
        }

        const questions = await Question.find();
        return res.json(questions);
    } catch (err) {
        console.error(err.message);
        res.json({ msg: 'Server Error' });
    }
});


//@route        GET /api/questions/:ques_id
//@desc         To get a question by its id
//@access       Private
router.get('/:ques_id', auth ,async (req, res) => {
    try {
        const question = await Question.findById(req.params.ques_id);

        if(!question){
            return res.status(404).json({msg: 'Question not found.'});
        }

        return res.json(question);
        
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Question not found.' });
        }
        res
            .status(500)
            .send('Server Error');
    }
});


//@route        POST /api/questions
//@desc         To Post a question route
//@access       Private (Admin Only)
router.post('/', [adminAuth,
    [
        check('statement', 'Question statement is required.').not().isEmpty(),
        check('difficulty', 'Question difficulty is required.').not().isEmpty(),
        check('subject', 'Subject is required.').not().isEmpty(),
        check('option1', 'All 4 options are required.').not().isEmpty(),
        check('option2', 'All 4 options are required.').not().isEmpty(),
        check('option3', 'All 4 options are required.').not().isEmpty(),
        check('option4', 'All 4 options are required.').not().isEmpty()
    ]
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array() });
    }

    const {
        statement,
        difficulty,
        subject,
        part,
        option1,
        option2,
        option3,
        option4,
    } = req.body;

    const options = [option1, option2, option3, option4];

    const optionCorrectness = options.map(option => option.correct).indexOf(true);
    if (optionCorrectness == -1) {
        return res
            .status(400)
            .json({ errors: [{ msg: 'At least one correct option should be provided.' }] });
    }

    const newQuestion = {
        statement,
        difficulty,
        subject,
        part,
        options
    };

    try {

        const question = new Question(newQuestion);
        await question.save();
        res.json(question);

    } catch (err) {
        console.error(err.message);
        res
            .status(500)
            .send('Server Error');
    }
});

//@route        DELETE /api/questions/:ques_id
//@desc         To delete a specific question
//@access       Private (Admin Only)
router.delete('/:ques_id', adminAuth, async (req, res) => {
    try {

        await Question.findByIdAndRemove(req.params.ques_id);
        res.json({ msg: 'Question Deleted.' });

    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Question not found.' });
        }
        res
            .status(500)
            .send('Server Error');
    }
});

//@route        PUT /api/questions/feedback/:ques_id
//@desc         To give feedback comments for a question
//@access       Private
router.put('/feedback/:ques_id', [auth,
    check('text', 'The feedback should not be empty.').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array() });
    }

    try {

        const question = await Question.findById(req.params.ques_id);

        if(!question){
            return res
                    .status(404)
                    .json({errors: [{msg: 'Question not found.'}]});
        }

        
        if(question.feedbacks.filter(feedback => feedback.user.toString() === req.user.id).length > 0){
            return res
                    .status(400)
                    .json({errors: [{msg: 'Feedback already given.'}]});
        }

        const feedback = {
            user: req.user.id,
            text: req.body.text
        };

        question.feedbacks.unshift(feedback);

        await question.save();

        res.json(question.feedbacks);
        
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Question not found.' });
        }
        res
            .status(500)
            .send('Server Error');
    }

});

//@route        DELETE /api/questions/feedback/:ques_id
//@desc         To delete a question by its id
//@access       Private
router.delete('/feedback/:ques_id', auth, async (req, res) => {

    try {

        const question = await Question.findById(req.params.ques_id);

        if(!question){
            return res
                    .status(404)
                    .json({msg: 'Question not found.'});
        }

        const feedbackIndex = question.feedbacks.map(feedback => feedback.user.toString()).indexOf(req.user.id);

        if(feedbackIndex < 0 ){
            return res
                    .status(400)
                    .json({msg: 'Feedback not given yet.'});
        }
        
        question.feedbacks.splice(feedbackIndex, 1);

        await question.save();

        res.json(question.feedbacks);
        
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Question not found.' });
        }
        res
            .status(500)
            .send('Server Error');
    }

});


module.exports = router;