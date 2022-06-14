// Track selector function. Removes from array if selected.
const getTrack = (rooms, roomId) => {
  const currentRoom = rooms.findIndex(({ Id }) => Id === roomId);
  const rnmTrackNum = Math.floor(
    Math.random() * rooms[currentRoom].tracks.length
  );
  const newTrack = rooms[currentRoom].tracks[rnmTrackNum];

  rooms[currentRoom] = { ...rooms[currentRoom], currentTrack: newTrack };
  rooms[currentRoom].tracks.splice(rnmTrackNum, 1);

  return rooms[currentRoom].currentTrack;
};

module.exports = getTrack;
