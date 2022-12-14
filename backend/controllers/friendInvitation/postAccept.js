const FriendInvitation = require('../../models/friendInvitation');
const User = require('../../models/user');
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postAccept = async (req,res) => {
    try {
        const { id } = req.body;
        const invitation = await FriendInvitation.findById(id)
        if(!invitation){
            return res.status(401).send('Error occurred. Please try again!')
        }

        const { senderId, receiverId} = invitation;
        //add friends to both of the users db and front end
        const senderUser = await User.findById(senderId)
        senderUser.friends = [...senderUser.friends, receiverId];
        const receiverUser = await User.findById(receiverId);
        receiverUser.friends = [...receiverUser.friends, senderId]

        await senderUser.save()
        await receiverUser.save()

        //delete invitation after accepting
        await FriendInvitation.findByIdAndDelete(id)

        //update list of the friends live time
        friendsUpdate.updateFriends(senderId.toString())
        friendsUpdate.updateFriends(receiverId.toString())
        
        //update list of pending invitation live time
        friendsUpdate.updateFriendsPendingInvitations(receiverId.toString())
        return res.status(200).send('Friend added!')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Looks like something went wrong. Please try again!')   
    }
}

module.exports = postAccept