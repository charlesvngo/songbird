import React, { useState, useEffect } from "react";

// material UI
import { Box, Slider, Stack, Typography, LinearProgress } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";

import albumArt from "../../assets/albumArt.png";

import wordSpace from "../../assets/wordSpace.png";

import { IPlayGameProps } from "../../Interfaces";

export const PlayGame = (props: IPlayGameProps) => {
  
  useEffect (() => {
    props.audio.src = props.track.preview_url
    props.audio.volume = 0.2;
    props.audio.play()
    props.audio.onended = () => {
      props.endOfRound()
    }
  }, [])

  const songTitle: string = props.track.name;
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
        height: "93vh",
      }}
    >
      <Typography variant="h4" component="h4">
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
        sx={{ height: 20, width: "45vh" }}
      />

      <Stack spacing={2} direction="row">
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
}