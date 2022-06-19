import React from "react";
import { BottomNavigation, Typography } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation sx={{ bottom: 0 }}>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: 1,
        }}
      >
        {" "}
        © 2022 Songbird, All Rights Reserved
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
