const User = require('../models/user.model');
const { validationResult } = require('express-validator');

module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({error : errors.array()});
    try{
        const {name, email, password} = req.body;
        const doesExists = await User.findOne({email});
        if(doesExists)
            return res.status(400).json({error : "Email already exists please try another one"})
        const hashedPass = await User.hashPassword(password);
        const newUser = await User.create({
            name,
            email,
            password : hashedPass
        });
        if(newUser)
            return res.status(200).json({message : "Registeration successful"});
        return res.status(400).json({message : "Failed to register user"});
    } catch(err){
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.login = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({errors : errors.array()});

    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user)
            return res.status(400).json({error : "Invalid email"});
        const isMatch = await user.comparePassword(password);
        if(!isMatch)
            return res.status(400).json({error : "Invalid passord"});

        const token = await user.generateAuthToken();
        res.cookie('token', token);
        return res.status(200).json({message : "Login successfull", token});
    } catch(err){
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.user._id).select('-password -__v');
        if(!user)
            return res.status(400).json({error : "user not found"});
        return res.status(200).json({user});
    } catch(err){
        return res.status(500).json({error : "Internal server error"})
    }
}