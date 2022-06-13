const express = require("express");
const app = express();
// const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

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
let rooms = [];

// express configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// retrieves authentication token from spotify
getToken().then((res) => {
  token = res.data.access_token;
  console.log(token);
});

server.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT} 👍`);
});

// establishes socket connection
io.on("connection", (socket) => {
  const { username, roomId, avatar } = socket.handshake.query;
  // const roomId = socket.handshake.query.roomId;
  // const avatar = socket.handshake.query.avatar

  socket.join(roomId);

  users.push({ id: socket.id, username, roomId, avatar, score: 0 });

  if ((index = rooms.findIndex(({ Id }) => Id === roomId)) === -1) {
    rooms.push({
      Id: roomId,
      tracks: [],
      titles: [],
      currentTrack: {},
    });
  }
  console.log("All Users: ", users);
  console.log("All Rooms: ", rooms);

  //socket.emit("update-users", users.filter((u) => u.roomId === roomId))

  socket.on("player-joined", () => {
    io.in(roomId).emit(
      "update-users",
      users.filter((u) => u.roomId === roomId)
    );
  });

  socket.on("Guess", (guess) => {
    io.in(roomId).emit("chat-messages", `${username}: ${guess}`);
  });

  socket.on("start-game", () => {
    console.log("game started");
    io.to(roomId).emit("game-started", `Game has started`);
  });

  socket.on("genre-selected", (genre) => {
    getPlaylist(token, genre).then((result) => {
      const tracks = result.data.tracks;
      const titles = tracks.map((track) => track.name);
      const index = rooms.findIndex(({ Id }) => Id === roomId);
      const updateTracks = { ...rooms[index], tracks, titles };
      rooms[index] = updateTracks;
      console.log("All rooms after update", rooms);
    });
  });

  socket.on("next-round", () => {
    console.log("next-round");
    const currentRoom = rooms.findIndex(({ Id }) => Id === roomId);
    const rnmTrackNum = Math.floor(
      Math.random() * rooms[currentRoom].tracks.length
    );

    console.log("The randomest number", rnmTrackNum);
    console.log(
      "The tracks length before slice",
      rooms[currentRoom].tracks.length
    );

    const newTrack = rooms[currentRoom].tracks[rnmTrackNum];
    rooms[currentRoom] = { ...rooms[currentRoom], currentTrack: newTrack };
    rooms[currentRoom].tracks.splice(rnmTrackNum, 1);

    console.log(
      "The tracks length after slice",
      rooms[currentRoom].tracks.length
    );

    io.to(roomId).emit("new-track", rooms[currentRoom].currentTrack);
    //socket.emit("new-track", rooms[currentRoom].currentTrack);
    console.log(rooms[currentRoom]);
  });

  // disconnects user and removes them from users array
  socket.on("disconnect", () => {
    users = users.filter((u) => u.id !== socket.id);
    io.in(roomId).emit(
      "update-users",
      users.filter((u) => u.roomId === roomId)
    );
    console.log(`${username} has diconnected!`);
    console.log("All Users: ", users);
  });
});
