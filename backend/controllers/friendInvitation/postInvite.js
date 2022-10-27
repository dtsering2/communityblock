const User = require("../../models/user");

const postInvite = async (req, res) => {
    const { targetEmailAddress} = req.body;

    const { userId, email} = req.user;

    //validate if friend that we want to invite is a user

    if(email.toLowerCase() === targetEmailAddress.toLowerCase()){
        return res.status(409).send('You cannot become your own friend. That is sad.')
    }

    const targetUser = await User.findOne({
        email: targetEmailAddress.toLowerCase()
    })

    if(!targetUser){
        return res.status(404).send(`Looks like ${targetEmailAddress} is not registered with us. Please make sure that your friend is registered with the email that you have submitted or submit a new email address.`)
    }
    //validate if invitation has already been sent
    const invitationAlreadyReceived = await Invitation.findOne({
        senderId : userId,
        receiverId: targetUser
    })

    if(invitationAlreadyReceived){
        return res.status
    }
    return res.send('controller is good')
}

module.exports = postInvite