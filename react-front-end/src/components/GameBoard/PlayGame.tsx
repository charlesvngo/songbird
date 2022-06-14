import React from "react";
import { Avatar, Box, Slider } from "@mui/material";

import playButton from "../../assets/play-button.png";
import forward from "../../assets/forward.png";
import rewind from "../../assets/rewind.png";
import albumArt from "../../assets/albumArt.png";

export const PlayGame = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <h1>GUESS THE SONG - ROUND 1</h1>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src={albumArt}> </img>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Avatar src={rewind}></Avatar>
        <Avatar src={playButton}></Avatar>
        <Avatar src={forward}></Avatar>
      </Box>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
