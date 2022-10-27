const connectedUsers = new Map();

const addNewConnectedUser = ({socketId, userId}) => {
    connectedUsers.set(socketId, {userId})
    console.log('newconnecteduser') //remove me
    console.log(connectedUsers) //remove me 
};

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)){
        connectedUsers.delete(socketId)
        console.log( ' new connected user')
        console.log(connectedUsers)
    }
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser
}