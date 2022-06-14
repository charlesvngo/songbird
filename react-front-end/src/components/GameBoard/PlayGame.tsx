import React from "react";
import { Avatar, Box, Slider, Typography, LinearProgress } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";

import playButton from "../../assets/play-button.png";
import forward from "../../assets/forward.png";
import rewind from "../../assets/rewind.png";
import albumArt from "../../assets/albumArt.png";
import letterSpace from "../../assets/letterSpace.png";
import wordSpace from "../../assets/wordSpace.png";

export const PlayGame = () => {
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
    return <img key={i} src={wordSpace} width="30" height="30"></img>;
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: 2,
      }}
    >
      <Typography
        sx={{
          marginBottom: 2,
        }}
        variant="h4"
        component="h4"
      >
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          spacing: 0,
        }}
      >
        {letterSpaces}
      </Box>

      <LinearProgress variant="determinate" value={70} />

      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
        sx={{ width: "40vh" }}
      />
    </Box>
  );
};
