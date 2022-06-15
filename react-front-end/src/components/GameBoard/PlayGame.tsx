import React, { useState } from "react";

// material UI
import { Box, Slider, Stack, Typography, LinearProgress } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeOff from "@mui/icons-material/VolumeOff";

import albumArt from "../../assets/albumArt.png";

import wordSpace from "../../assets/wordSpace.png";

export const PlayGame = () => {
  const [volume, setVolume] = useState([0, 100]);

  // const updateRange = (data: number) => {
  //   setVal(data);
  // };

  const songTitle: string = "Hey Jude";
  const letterSpaces = [...songTitle].map((char, i) => {
    if (char !== " ") {
      return (
        <MinimizeIcon
          sx={{
            width: 50,
            height: 50,
          }}
        ></MinimizeIcon>
      );
    }

    const handleChange = () => {};

    return <img key={i} src={wordSpace} width="30" height="30"></img>;
  });

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

      <Stack spacing={0} direction="row">
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
