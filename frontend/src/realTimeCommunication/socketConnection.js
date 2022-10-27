import io from 'socket.io-client';
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsActions'
import store from '../store/store'
let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken, 
        }
    });

    socket.on('connect', ()=>{
        console.log('successful connection with socket server'); //remove me
        console.log(socket.id) //remove me 
    })

    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data
        console.log('friends invite received') //remove me
        console.log(pendingInvitations) //remove me
        
        store.dispatch(setPendingFriendsInvitations(pendingInvitations))
    })

    socket.on('friends-list', (data)=>{
        const {friends} = data;
        store.dispatch(setFriends(friends))
    })

    socket.on('online-users', (data)=> {
        const {onlineUsers} = data
        store.dispatch(setOnlineUsers(onlineUsers))
    })
}