import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

export const Countdown = () => {
  const [counter, setCounter] = useState<number>(5);
  useEffect(() => {
    counter > 1 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
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
      <Typography variant="h1">{counter}</Typography>
    </Box>
  );
};
