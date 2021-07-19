const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('./../models/User')

module.exports = async function (req, res, next) {
    //Get the token from the request header
    const token = req.header('x-auth-token');

    //If there is no token
    if (!token){
        return res
                .status(401)
                .json({msg: "No token. Not authorized."});
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;

        const user = await (User.findById(decoded.user.id).select('userType -_id'));

        if(user.userType != 'admin'){
            return res
                    .status(401)
                    .json({msg: "Not authorized."});
        }

        next();
    } catch (err) {
        res.status(401).json({msg: "Invalid Token"});
    }
}