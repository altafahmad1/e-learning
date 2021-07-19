const express = require('express');
const auth = require('./../../middleware/auth');
const Profile = require('./../../models/Profile');
const User = require('./../../models/User');
const {check, validationResult} = require('express-validator');

const router = express.Router();

//@route        GET /api/profile/me
//@desc         get user's own profile data
//@access       Private
router.get('/me', auth, async (req, res) => {
    
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate(
            'user',
            ['name', 'avatar']
        );

        if(!profile){
            res
                .status(400)
                .json({msg: 'No profile found for this user.'});    
        }

        res.json(profile);

    } catch (err){
        console.log(err.message);
        res
            .status(500)
            .send('Server Error');
    }

});

//@route        POST /api/profile
//@desc         Create or Update profile
//@access       Private
router.post('/', [
    auth,
    [
        check('country', 'Country is required.')
            .not()
            .isEmpty(),
    ] 
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res
                .status(400)
                .json({ errors: errors.array() });
    }

    const {
        country,
        status,
        bio,
        score
    } = req.body;

    //Build Profile Object
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.country = country;
    if(status) profileFields.status = status;
    if(bio) profileFields.bio = bio;
    if(score) profileFields.score = score;

    try {

        let profile = await Profile.findOne({user: req.user.id});

        if(profile){
            //Update the profile if profile is found
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true });

            return res.json(profile);
        }

        //If no profile is found, then create a new one
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);

    } catch(err){
        console.log(err.message);
        res
            .status(500)
            .send('Server Error');
    }

});

//@route        GET /api/profile
//@desc         Get profiles of all users
//@access       Public
router.get('/', async(req, res) => {
    try {

        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);

    } catch (err) {
        console.error(err.message);
        res
            .status(500)
            .send('Server Error');
    }
});


//@route        GET /api/profile/user/:user_id
//@desc         Get profile of user by user id
//@access       Public
router.get('/user/:user_id', async(req, res) => {
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar']);

        if(!profile) return res.status(400).json({msg: 'Profile not found.'});

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg: 'Profile not found.'});
        }
        res
            .status(500)
            .send('Server Error');
    }
});

//@route        DELETE /api/profile/
//@desc         Delete profile and user
//@access       Private
router.delete('/', auth, async(req, res) => {
    try {
        await Profile.findOneAndRemove({user: req.user.id}); //delete profile of user
        await User.findByIdAndRemove(req.user.id); //delete user itself
        
        res.json({msg: 'User Deleted'});

    } catch (err) {
        console.error(err.message);
        res
            .status(500)
            .send('Server Error');
    }
});

//@route        PUT /api/profile/education
//@desc         Add education to profile
//@access       Private
router.put('/education', [auth, 
    [
        check('degree', 'Degree is required.').not().isEmpty(),
        check('fieldOfStudy', 'Field of Study is required.').not().isEmpty(),
        check('from', 'A starting date is required.').not().isEmpty()
    ]],
    async ( req, res ) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res
                    .status(400)
                    .json({ errors: errors.array() });
        }

        const {
            degree,
            fieldOfStudy,
            from,
            to,
            current,
            description
        } = req.body;

        const newEd = {
            degree,
            fieldOfStudy,
            from,
            to,
            current,
            description
        };

        try {
            
            const profile = await Profile.findOne({user: req.user.id});
            profile.education.unshift(newEd);

            await profile.save();

            res.json(profile);

        } catch (err) {
            console.error(err.message);
            res
                .status(500)
                .send('Server Error');
        }

    }
);

//@route        DELETE /api/profile/education/:ed_id
//@desc         Delete an education entry
//@access       Private
router.delete('/education/:ed_id', auth, async (req, res) => {
    try {
        
        const profile = await Profile.findOne({user: req.user.id});

        //Get index of the education entry to be removed
        const delIndex = profile.education.map(ed => ed.id).indexOf(req.params.ed_id);
        profile.education.splice(delIndex, 1);

        await profile.save();

        res.json(profile);

    } catch (err) {
        console.error(err.message);
            res
                .status(500)
                .send('Server Error');
    }
});


module.exports = router;