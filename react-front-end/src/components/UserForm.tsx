import React, { useState } from "react";
import { IUserFormProps } from "../interfaces/UserFormInterfaces";

import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import bird from "../assets/bird_1.png";
import bird2 from "../assets/bird_2.png";
import bird3 from "../assets/bird_3.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";

import { userInfo } from "os";

const UserForm = (props: IUserFormProps) => {
  const [user, setUser] = useState({
    username: "",
    roomId: "",
    score: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user.username === "") {
      return;
    }
    props.createSocket(user);
  };

  const nextAvatar = () => {
    console.log("next arrow clicked!");
  };

  const prevAvatar = () => {
    console.log("prev arrow clicked!");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar
            src={prev}
            onClick={prevAvatar}
            sx={{ width: 30, height: 30 }}
          />
          <Avatar src={bird} sx={{ padding: 2, width: 150, height: 150 }} />
          <Avatar
            src={next}
            onClick={nextAvatar}
            sx={{ width: 30, height: 30 }}
          />
        </Box>
        <Typography component="h1" variant="h5">
          Songbird
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="room-id"
            label="Enter Room ID (Optional)"
            type="room-id"
            id="room-id"
            autoComplete="room-id"
            onChange={(e) => setUser({ ...user, roomId: e.target.value })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Start Game
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserForm;
