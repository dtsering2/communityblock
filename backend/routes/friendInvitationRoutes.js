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


const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),
})

router.post(
    '/invite', 
    auth, 
    validator.body(postFriendInvitationSchema), 
    friendInvitationControllers.controllers.postInvite
)

router.post(
    '/accept', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.controllers.postAccept
)

router.post(
    '/reject', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.controllers.postReject
)



module.exports = router