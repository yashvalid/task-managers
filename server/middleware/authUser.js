const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports.authenticateUser = async (req,res, next) => {
    try{
        const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
        if(!token)
            return res.status(404).json({error : "Unauthorized"});
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded)
            return res.status(403).json({error : "decode"})
        const user = await User.findOne({_id : decoded._id});
        if(!user)
            return res.status(404).json({error : "Unauthorized"});
        req.user = user._id;
        next();
    } catch(err){
        return res.status(404).json({error : "Unauthorized"});
    }
}