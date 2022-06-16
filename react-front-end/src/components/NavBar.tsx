import React, { useState } from "react";
import bird from "../assets/bird_logo_clear.png";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Avatar,
  Modal,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <AppBar position="static">
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Avatar src={bird} variant="rounded" sx={{ marginRight: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SONGBIRD
          </Typography>
        </Toolbar>
        <Typography
          component="a"
          sx={{ display: "flex", color: "inherit", alignItems: "center" }}
        >
          <InfoIcon onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                About Us
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                We made this awesome app! 
              </Typography>
            </Box>
          </Modal>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default NavBar;
