const FriendInvitation = require('../../models/friendInvitation')
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postReject = async (req,res) => {
    try {
        const { id } = req.body;
        const { userId } = req.user;
        //removal invitation logic
        const invitationExist = await FriendInvitation.exists({_id: id})

        if(invitationExist){
            await FriendInvitation.findByIdAndDelete(id);
        }

        //update pending invitations 
        friendsUpdate.updateFriendsPendingInvitations(userId)
        return res.status(200).send('Invitation successfully rejected.')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Looks like something went wrong. Please try again!')
    }
}

module.exports = postReject