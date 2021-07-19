const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //Get the token from the request header
    const token = req.header('x-auth-token');

    //If there is no token
    if (!token){
        return res.status(401).json({msg: "No token. Not authorized."});
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg: "Invalid Token"});
    }
}