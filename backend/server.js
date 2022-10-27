const express = require ("express"); //express allows us to create the server
const http = require("http");
const cors = require("cors"); //our frontend and backend are in 2 different ports, so we need cors to allow communication between the two
const mongoose = require("mongoose"); //we will create our db with mongoose
require("dotenv").config();

const socketServer = require('./socketServer')
const authRoutes = require("./routes/authRoutes");
const friendInvitationRoutes = require('./routes/friendInvitationRoutes')

const PORT = process.env.PORT || process.env.API_PORT;

const app = express(); //creating an instance of an express server

//Middleware
app.use(express.json());
app.use(cors());

//adding routes
app.use("/api/auth", authRoutes);
app.use('/api/friend-invitation', friendInvitationRoutes)

const server = http.createServer(app);

socketServer.registerSocketServer(server);
//connection to our db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Server is on ${PORT}`)
    });
})
.catch(err=>{
    console.log('db connection failed. Server not start.');
    console.error(err);
})