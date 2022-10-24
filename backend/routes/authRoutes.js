const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers")
const Joi = require("joi");
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth") //TODO remove me after testing

const registerSchema = Joi.object({
    username: Joi.string().min(6).max(20).required(),
    password:joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .min(8)
        .noWhiteSpaces()
        .required(),
    confirm_password: Joi.string().required().valid(Joi.ref('password')),
    email: Joi.string().email().required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(8).max(20).required(),
    email: Joi.string().email().required()
})

router.post(
    "/register", 
    validator.body(registerSchema), 
    authControllers.controllers.postRegister
);
router.post(
    "/login", 
    validator.body(loginSchema), 
    authControllers.controllers.postLogin
);

//TODO test routes to verify middlewares
router.get("/test", auth,(req,res)=>{
    res.send('request is passed')
})

//exporting our routes
module.exports = router;
