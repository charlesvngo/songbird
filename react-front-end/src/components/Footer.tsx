import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
