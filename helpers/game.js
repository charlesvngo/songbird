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
  if (!rooms) {
    return;
  }

  return rooms.findIndex(({ id }) => id === roomId);
};

const findUserIndex = (room, idToFind) => {
  let retIndex = -1;
  if (room === [] || !room) return;
  if (room.users === [] || !room.users) return;
  retIndex = room.users.findIndex(({ id }) => id === idToFind);

  return retIndex;
};

module.exports = { getTrack, findRoomIndex, findUserIndex };
