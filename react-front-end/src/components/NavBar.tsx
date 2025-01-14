import React, { useState } from "react";
import { INavProps } from "../Interfaces";

import logoLight from "../assets/bird_logo_white.png";
import logoDark from "../assets/bird_logo_dark.png";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Avatar,
  Modal,
  Box,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { lightTheme } from "../styles/theme";

const NavBar = (props: INavProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const handleTheme = (): void => props.changeTheme();

  const themeColor: string = props.theme === lightTheme ? "white" : "#121212";
  const logo: string = props.theme === lightTheme ? logoLight : logoDark;

  const theme = useTheme();

  return (
    <AppBar position="static">
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // height: "5vh",
        }}
      >
        <Toolbar>
          <Avatar
            src={logo}
            variant="rounded"
            sx={{ marginRight: 2 }}
            onClick={() => {
              location.reload();
            }}
          />
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
              color: themeColor,
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
          <DarkModeIcon
            onClick={handleTheme}
            sx={{ marginRight: 2, color: themeColor }}
          />
          <InfoIcon onClick={handleOpen} sx={{ color: themeColor }} />
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
                width: 500,
                bgcolor: themeColor,
                border: 3,
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
                [theme.breakpoints.down("md")]: {
                  width: "75vw",
                },
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  marginBottom: 1,
                }}
              >
                SONGBIRD
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Simple, multiplayer guessing game with a musical twist.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <strong>How to play:</strong>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                1. Upon selecting a genre and # of rounds, a series of songs
                will be prepared for you to guess.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                2. Each round a <strong>30 second clip</strong> of a song will
                play.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                3. If you know the song, type the <strong>song title</strong>{" "}
                into the guess box and hit enter.
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <strong>Scoring:</strong>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                ⏳ You will recieve points based on how quickly you can guess
                the songs!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                🌟 If you can't guess a song, worry not, as there is ample
                opportunity for redemption.
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, marginBottom: 2 }}
              >
                🏆 Refer to the leaderboard each round to see whose in the lead.
              </Typography>

              <Divider />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LinkedInIcon sx={{ marginRight: 1 }} />
                  <Link
                    href="https://www.linkedin.com/in/amymariemart/"
                    underline="none"
                  >
                    Amy Martin
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LinkedInIcon sx={{ marginRight: 1 }} />
                  <Link
                    href="https://www.linkedin.com/in/darrenpkelly/"
                    underline="none"
                  >
                    Darren Kelly
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LinkedInIcon sx={{ marginRight: 1 }} />
                  <Link
                    href="https://www.linkedin.com/in/charlesvanngo/"
                    underline="none"
                  >
                    Charles Ngo
                  </Link>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default NavBar;
