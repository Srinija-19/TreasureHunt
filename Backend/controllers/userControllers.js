const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const User = require("../models/userModel");


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
    {
        res.status(400);
        throw new Error("Please enter all the feilds"); 
    }
    const userExists = await User.findOne({ email });

    if (userExists)
    {
        res.status(400);
        throw new Error("User already Exists");
    }

    const user = await User.create({
        name , email , password 
    })

    if (user)
    {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token : generateToken(user._id),
        })
    }
    else {
        res.status(400);
        throw new Error("Failed to create new user");
    }


});



const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password)))
    {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Wrong Credentials");
    }

});

module.exports = {registerUser , authUser }