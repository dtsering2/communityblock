const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req,res)=>{
    try{
        //deconstructing the response from the front end from the register form
        const { username, email, password, confirm_password } = req.body;

        //lets check if user exists first
        const userExists = await User.exists({email: email.toLowerCase(), username: username.toLowerCase()});
        if(userExists){
            return res.status(409).send('Email and/or username is already in use.');
        }

        //encrypting password
        const encryptedPassword = await bcrypt.hash(password, 10)

        //create a user instance and add it in db
        const user = await User.create({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        //create token
        const token = jwt.sign(
            {
                userId: user._id,
                email 
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }
        );
        
        res.status(201).json({
            userDetails:{
                email: user.email,
                token: token,
                username: user.username,
            },
        });

    } catch(err) {
        return res.status(500).send('Error occurred. Please try again');
    }
};

module.exports = postRegister;