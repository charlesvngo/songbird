const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const PORT = 8081;
require("dotenv").config();

// helper functions
const { getToken, getPlaylist } = require("./helpers/spotify");

// socket IO
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

// global variables
let token = "";
let users = [];

// express configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// retrieves authentication token from spotify
getToken().then((res) => (token = res.data.access_token));

app.get("/api/data", (req, res) => {
  // retrieves playlist data from spotify
  getPlaylist(token).then((result) => res.json({ tracks: result.data.tracks }));
});

server.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT} 👍`);
});

// establishes socket connection
io.on("connection", (socket) => {
  const user = socket.handshake.query.username;
  const roomId = socket.handshake.query.roomId;

  socket.join(roomId);
  
  users.push({username: socket.handshake.query.username, roomId: socket.handshake.query.roomId, score: 0});
  
  console.log(`${user} has connected!`);
  console.log("All Users: ", users);

  socket.emit("update-users", users.filter((u) => u.roomId === roomId))

  socket.on("player-joined", () => {
    socket.in(roomId).emit("update-users", users.filter((u) => u.roomId === roomId))
  });

  socket.on("Guess", (guess) => {
    socket.to(roomId).emit("chat-messages", `${user}: ${guess}`);
  });
  

  // disconnects user and removes them from users array
  socket.on("disconnect", () => {
    users = users.filter((u) => u.username !== user);

    console.log(`${user} has diconnected!`);
    console.log("All Users: ", users);
  });
});
