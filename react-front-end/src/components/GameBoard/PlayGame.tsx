import React, { useState, useEffect } from "react";
import AudioVisualizer from "./AudioVisualizer.jsx";
import { IPlayGameProps } from "../../Interfaces";
import { Box, Slider, Stack, Typography, LinearProgress } from "@mui/material";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";

export const PlayGame = (props: IPlayGameProps) => {
  const [blur, setBlur] = useState<number>(10);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<
    number | string | Array<number | string>
  >(20);

  // updates progress bar
  useEffect(() => {
    // progress < 100 && setTimeout(() => setProgress(progress + 1), 290);
    const timer = setTimeout(() => {
      setProgress((props.audio.currentTime / props.audio.duration) * 100);
      setBlur(10 - (props.audio.currentTime / props.audio.duration) * 10);
    }, 300);
    return () => clearTimeout(timer);
  }, [progress]);

  useEffect(() => {
    props.audio.src = props.track.preview_url;
    props.audio.volume = 0.2; // default volume
    props.audio.play();
    props.audio.onended = () => {
      props.endOfRound();
    };
  }, []);

  // volume adjustments
  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue);
    const volumeConversion = Number(newValue) / 100;

    if (volumeConversion === 0.0) {
      props.audio.volume = 0;
    }

    props.audio.volume = volumeConversion;
  };

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
      <Typography
        variant="h4"
        component="h4"
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        GUESS THE SONG - ROUND {props.round}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            marginRight: 4,
            height: 200,
            width: 200,
            border: 3,
            borderRadius: 2,
            filter: `blur(${blur}px)`,
          }}
          alt="The house from the offer."
          src={props.track.album.images[0].url}
        />

        <AudioVisualizer />
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 20, width: "45vh" }}
      />

      <Stack spacing={2} direction="row">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          valueLabelDisplay="auto"
          value={typeof volume === "number" ? volume : 0}
          onChange={handleVolumeChange}
          sx={{ width: "20vh" }}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
};
