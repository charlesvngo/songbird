import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vw",
        marginTop: 1,
      }}
    >
      <Typography variant="subtitle1">
        {" "}
        © 2022 Songbird, All Rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
