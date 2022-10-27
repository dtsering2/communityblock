const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth") 
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers')

const postFriendInvitationSchema = Joi.object({
    targetEmailAddress: Joi.string().email(),
})

router.post(
    '/invite', 
    auth, 
    validator.body(postFriendInvitationSchema), 
    friendInvitationControllers.controller.postInvite)

module.exports = router