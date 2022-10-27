const User = require("../../models/user");
const FriendInvitation = require('../../models/friendInvitation')
const friendsUpdate = require('../../socketHandlers/updates/friends')
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
    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId : userId,
        receiverId: targetUser
    })

    if(invitationAlreadyReceived){
        return res.status(409).send('Invitation has already been sent.')
    }

    //validate if the email is already our friend
    const usersAlreadyFriends = targetUser.friends.find(
        friendId => friendId.toString() === userId.toString()
    )

    if(usersAlreadyFriends) {
        return res.status(409).send('You are already friends! Please go to your friends list to begin chatting.')
    }
    
    //create a new invitation and save it onto db for future validations
    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id
    })

    //TODO WE WANT TO CONFIGURE SUCCESSFUL INVITATION CREATION AND UPDATE FRIENDS INVITATIONS IF OTHER USER IS ONLINE

    //TODO SEND PENDING INVITATION UPDATES TO THE SPECIFIED USER
    friendsUpdate.updateFriendsPendingInvitations(targetUser._id.toString())
    
    return res.status(201).send('Invitation has been sent.')
}

module.exports = postInvite