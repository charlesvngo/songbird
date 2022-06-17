import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles"
import { Typography, Box, Slide, Grow, keyframes, TypographyProps } from "@mui/material";
import TrackOutFwdBot from "../animations/tracking-out";
import { StyledTypoProps } from "../../Interfaces"

const Count = styled(Typography, {shouldForwardProp: (prop) => prop !== 'animate',})<StyledTypoProps>(({animate}) => ({
  fontSize: 88,
  ...(animate &&
    {
  animation: animate && `${TrackOutFwdBot()} 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`
    }),
})) 

export const Countdown = () => {
  const [counter, setCounter] = useState(5);
  const [trackOut, setTrackOut] = useState(false)
  const containerRef = useRef(null);
  console.log("TrackOut value", trackOut)
  console.log("TrackOut type:", typeof(trackOut))
  useEffect(() => {
    setTrackOut(false)
    counter > 1 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      setTimeout(() => {
        setTrackOut(true);
      }, 200);
  
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
          <Count animate = {trackOut}>{counter}</Count>
        </Grow>
      </Box>
    </Slide>
  );
};
