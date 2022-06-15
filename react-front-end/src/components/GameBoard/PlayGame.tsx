import React, { useState } from "react";

// material UI
import { Box, Slider, Stack, Typography, LinearProgress } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";

import albumArt from "../../assets/albumArt.png";

import wordSpace from "../../assets/wordSpace.png";

export const PlayGame = () => {
  const songTitle: string = "Hey Jude";
  const letterSpaces = [...songTitle].map((char, i) => {
    if (char !== " ") {
      return (
        <MinimizeIcon
          sx={{
            width: 40,
            height: 40,
          }}
        ></MinimizeIcon>
      );
    }
    return <img key={i} src={wordSpace} width="20" height="20"></img>;
  });

  // slowly reveals album art as song plays
  const revealImage = () => {};

  // updates progress bar as 30 second song plays
  const songProgress = () => {};

  // adjusts song volume
  const adjustVolume = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Typography variant="h4" component="h4" sx={{ marginTop: 2 }}>
        GUESS THE SONG - ROUND 1
      </Typography>

      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          border: 3,
          borderRadius: 2,
          opacity: 0.75,
          marginTop: 3,
        }}
        alt="The house from the offer."
        src={albumArt}
      />

      <Stack spacing={0} direction="row" sx={{ marginTop: 3 }}>
        {letterSpaces}
      </Stack>

      <LinearProgress
        variant="determinate"
        value={50}
        sx={{ height: 20, width: "45vh", marginTop: 3 }}
      />

      <Stack spacing={2} direction="row" sx={{ marginTop: 3 }}>
        <VolumeDown />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ width: "20vh" }}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
};
