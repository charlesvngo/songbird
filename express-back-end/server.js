const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const axios = require('axios')
const { getToken, getPlaylist } = require('./helpers/spotify')
const ikea = require('ikea-name-generator');
require('dotenv').config()

// socket IO
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

// Express Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let token = ''
getToken().then((res) => token = res.data.access_token)

// sample GET route
app.get('/api/data', (req, res) => {
  getPlaylist(token)
    .then(result => res.json({ tracks: result.data.tracks }))
})

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});


let users = {};

//Socket listeners
io.on('connection', socket => {
  console.log("User has connected ", socket.handshake.query)
  console.log(socket.handshake.query.user )
  users[socket.id] = {name: socket.handshake.query.name, roomId: socket.handshake.query.roomId}
  console.log("users: ", users)

  socket.on('disconnet', () => {
    console.log('disconnected', socket.handshake.query.user.name)
    const user = JSON.parse(socket.handshake.query.user.name)
    const name = getUserById(socket.id)
    if(name) delete users[socket.id]
    console.log(users)
  })
});  


