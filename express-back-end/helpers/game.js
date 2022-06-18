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
  let retIndex = -1;

  rooms.forEach((r) => {
    retIndex = r.users.findIndex(({ id }) => id === idToFind);
    if (retIndex !== -1) return retIndex;
  });
  return retIndex;
};

module.exports = { getTrack, findRoomIndex, findUserIndex };
