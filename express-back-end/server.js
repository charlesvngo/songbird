const express = require("express");
const app = express();
// const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// helper functions
const { getToken, getPlaylist } = require("./helpers/spotify");
const getTrack = require("./helpers/game");

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
  console.log("User has connected:", username);
  socket.join(roomId);

  users.push({ id: socket.id, username, roomId, avatar, score: 0 });

  if ((index = rooms.findIndex(({ Id }) => Id === roomId)) === -1) {
    rooms.push({
      Id: roomId,
      tracks: [],
      titles: [],
      currentTrack: {},
      rounds: 0,
    });
  }

  socket.on("player-joined", () => {
    io.in(roomId).emit(
      "update-users",
      users.filter((u) => u.roomId === roomId)
    );
  });

  socket.on("end-of-round", () => {
    setTimeout(() => {
      io.in(roomId).emit(
        "end-round",
        users.filter((u) => u.roomId === roomId)
      );
    }, 5000);
  });

  socket.on("correct-answer", (score) => {
    const userIndex = users.findIndex(({ username }) => username === username);
    users[userIndex] = { ...users[userIndex], score };
    io.in(roomId).emit(
      "update-users",
      users.filter((u) => u.roomId === roomId)
    );
    io.in(roomId).emit("receive-chat-messages", {
      username,
      message: `Correct guess! Scored: ${score}`,
      avatar,
    });
  });

  socket.on("send-chat-message", (guess) => {
    // io.in(roomId).emit("chat-messages", `${username}: ${guess}`);
    io.in(roomId).emit("receive-chat-messages", {
      username,
      message: guess,
      avatar,
    });
  });

  // what dis doing?
  socket.on("start-game", (genre, rounds) => {
    // Obtain the playlist based on the selected genre passed in from host.
    getPlaylist(token, genre).then((result) => {
      const tracks = result.data.tracks.filter((t) => t.preview_url !== null);
      const titles = tracks.map((track) => track.name);
      const index = rooms.findIndex(({ Id }) => Id === roomId);
      rooms[index] = { ...rooms[index], tracks, titles, rounds };
      console.log(rooms[index]);
      const nextTrack = getTrack(rooms, roomId);
      io.to(roomId).emit("next-track", nextTrack);
      // Tell all players that the game has started
      io.to(roomId).emit("game-started", `Game has started`);
      setTimeout(() => {
        // After the 5 second countdown, Tell clients to play track and start guessing.
        io.to(roomId).emit("round-start", "Round is starting!");
      }, 5000);
    });
  });

  // socket.on("next-round", () => {
  //   console.log("next-round");

  //   const currentRoom = rooms.findIndex(({ Id }) => Id === roomId);
  //   const rnmTrackNum = Math.floor(
  //     Math.random() * rooms[currentRoom].tracks.length
  //   );
  //   const newTrack = rooms[currentRoom].tracks[rnmTrackNum];

  //   rooms[currentRoom] = { ...rooms[currentRoom], currentTrack: newTrack };
  //   rooms[currentRoom].tracks.splice(rnmTrackNum, 1);

  //   io.to(roomId).emit("new-track", rooms[currentRoom].currentTrack);
  // });

  // disconnects user and removes them from users array
  socket.on("disconnect", () => {
    users = users.filter((u) => u.id !== socket.id);
    io.in(roomId).emit(
      "update-users",
      users.filter((u) => u.roomId === roomId)
    );
  });
});
