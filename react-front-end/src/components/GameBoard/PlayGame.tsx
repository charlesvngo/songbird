import React, { useState, useEffect } from "react";

// material UI
import { Box, Slider, Stack, Typography, LinearProgress } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";

import albumArt from "../../assets/albumArt.png";

import wordSpace from "../../assets/wordSpace.png";

import { IPlayGameProps } from "../../Interfaces";
import { PeopleSharp } from "@mui/icons-material";

export const PlayGame = (props: IPlayGameProps) => {
  const [blur, setBlur] = useState<number>(20);
  const [progress, setProgress] = useState<number>(0);

  // slowly reveals album art as song plays
  useEffect(() => {
    blur > 0 && setTimeout(() => setBlur(blur - 0.25), 450);
  }, [blur]);

  // updates progress bar as 30 second song plays
  useEffect(() => {
    progress < 100 && setTimeout(() => setProgress(progress + 1), 290);
  }, [progress]);

  useEffect(() => {
    props.audio.src = props.track.preview_url;
    props.audio.volume = 0.2;
    props.audio.play();
    props.audio.onended = () => {
      props.endOfRound();
    };
  }, []);

  const songTitle: string = props.track.name;
  const letterSpaces = [...songTitle].map((char, i) => {
    if (char !== " ") {
      return (
        <MinimizeIcon
          key={i}
          sx={{
            width: 40,
            height: 40,
          }}
        ></MinimizeIcon>
      );
    }
    return <img key={i} src={wordSpace} width="20" height="20"></img>;
  });

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
          height: 300,
          width: 300,
          border: 3,
          borderRadius: 2,
          filter: `blur(${blur}px)`,
        }}
        alt="The house from the offer."
        src={props.track.album.images[0].url}
      />

      {/* <Stack spacing={0} direction="row">
        {letterSpaces}
      </Stack> */}

      <LinearProgress
        variant="determinate"
        value={progress}
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
};
