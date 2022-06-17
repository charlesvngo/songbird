// Track selector function. Removes from array if selected.
const getTrack = (rooms, roomId) => {
  const currentRoom = rooms.findIndex(({ id }) => id === roomId);
  const rnmTrackNum = Math.floor(
    Math.random() * rooms[currentRoom].tracks.length
  );
  const newTrack = rooms[currentRoom].tracks[rnmTrackNum];

  rooms[currentRoom] = { ...rooms[currentRoom], currentTrack: newTrack };
  rooms[currentRoom].tracks.splice(rnmTrackNum, 1);

  return rooms[currentRoom].currentTrack;
};

const findRoomIndex = (rooms, roomId) => {
  return rooms.findIndex(({ id }) => id === roomId);
};

const findUserIndex = (rooms, idToFind) => {
  let retUserIndex = -1;
  let retRoomIndex = -1;
  for (let i = 0; i < rooms.length; i++) {
    retUserIndex = rooms[i].users.findIndex(({ id }) => id === idToFind);
    if (retUserIndex !== -1) {
      retRoomIndex = i;
      return { userI: retUserIndex, roomI: retRoomIndex };
    }
  }

  return { userI: null, roomI: null };
};

module.exports = { getTrack, findRoomIndex, findUserIndex };
