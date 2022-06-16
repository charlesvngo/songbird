import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles"
import { Typography, Box, Slide, Grow, keyframes } from "@mui/material";

const trackingOutExpandFwdBottom = keyframes`
0% {
  -webkit-transform: translateZ(0) translateY(0);
          transform: translateZ(0) translateY(0);
  opacity: 1;
}
60% {
  opacity: 0.8;
}
100% {
  letter-spacing: 1em;
  -webkit-transform: translateZ(300px) translateY(200px);
          transform: translateZ(300px) translateY(200px);
  opacity: 0;
}
`;

const Count = styled(Typography)({
  variant: 'h1',
  // animation: trackOut && `${trackingOutExpandFwdBottom} 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`
}) as typeof Typography;

export const Countdown = () => {
  const [counter, setCounter] = useState<number>(5);
  const [trackOut, setTrackOut] = useState<any>(false)
  const containerRef = useRef(null);
  useEffect(() => {
    counter > 1 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      setTrackOut(true);
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
          <Count>{counter}</Count>
        </Grow>
      </Box>
    </Slide>
  );
};
