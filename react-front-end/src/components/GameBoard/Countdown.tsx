import React, { useEffect, useState, useRef } from "react";
import { Typography, Box, Slide, Grow } from "@mui/material";

export const Countdown = () => {
  const [counter, setCounter] = useState<number>(5);
  const containerRef = useRef(null);
  useEffect(() => {
    counter > 1 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
  }, [counter]);

  return (
    <Slide direction="down" in={true} container={containerRef.current}>
      <Box
        sx={{
          marginTop: 1,
          marginBottom: 1,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "93vh",
        }}
      >
        <Typography variant="h2">Song starts in: </Typography>
        <Grow in={true} {...{ timeout: 500 }}>
          <Typography variant="h1">{counter}</Typography>
        </Grow>
      </Box>
    </Slide>
  );
};
