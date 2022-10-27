const User = require('../../models/user')
const FriendInvitation = require('../../models/friendInvitation')
const serverStore = require('../../serverStore')


const updateFriendsPendingInvitations = async (userId) => {
    try {
        //want to check if user with the userId has active connections because one user can be on many devices => different socketIds
        const receiverList = serverStore.getActiveConnections(userId);
        if(receiverList.length >0 ){
            const pendingInvitations = await FriendInvitation.find({
                receiverId: userId
            }).populate('senderId', '_id username email');
            
            const io = serverStore.getSocketServerInstance();
    
            receiverList.forEach(receiverSocketId => {
                io.to(receiverSocketId).emit('friends-invitations', {
                    pendingInvitations: pendingInvitations ? pendingInvitations : []
                })
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateFriends = async (userId)=>{
    try {
        //find active connections of friends
        const receiverList = serverStore.getActiveConnections(userId)
        if(receiverList.length > 0 ){
            const user = await User.findById(userId, {_id: 1, friends:1}).populate(
                'friends',
                '_id username email'
            )

            if(user){
                const friendsList = user.friends.map(f=>{
                    return {
                        id: f._id,
                        email: f.email,
                        username: f.username
                    }
                });

                //get io instance to emit event
                const io = serverStore.getSocketServerInstance();

                receiverList.forEach(receiverSocketId =>{
                    io.to(receiverSocketId).emit('friends-list', {
                        friends: friendsList ? friendsList : []
                    })
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    updateFriendsPendingInvitations,
    updateFriends
}