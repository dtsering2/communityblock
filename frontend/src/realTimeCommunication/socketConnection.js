import io from 'socket.io-client';

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
}