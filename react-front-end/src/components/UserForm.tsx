import React, { useState } from "react";

// interfaces
import { IUserFormProps, IUser } from "../Interfaces";

// material UI
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grow,
} from "@mui/material";

// assets
import bird1 from "../assets/bird_1.png";
import bird2 from "../assets/bird_2.png";
import bird3 from "../assets/bird_3.png";
import bird4 from "../assets/bird_4.png";
import bird5 from "../assets/bird_5.png";
import bird6 from "../assets/bird_6.png";
import bird7 from "../assets/bird_7.png";
import bird8 from "../assets/bird_8.png";
import bird9 from "../assets/bird_9.png";
import bird10 from "../assets/bird_10.png";
import bird12 from "../assets/bird_12.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";

const UserForm = (props: IUserFormProps) => {
  // bird avatar state
  const birds = [
    bird1,
    bird2,
    bird3,
    bird4,
    bird5,
    bird6,
    bird7,
    bird8,
    bird9,
    bird10,
    bird12,
  ];
  const [birdIndex, setBirdIndex] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [user, setUser] = useState<IUser>({
    username: "",
    roomId: "",
    score: 0,
    avatar: birds[birdIndex],
  });

  const nextAvatar = () => {
    console.log("next arrow clicked!");

    const currentHistory = [...history];
    let newBirdIndex = birdIndex;
    newBirdIndex++;

    if (newBirdIndex < birds.length) {
      setHistory([...currentHistory, newBirdIndex]);
      setBirdIndex(newBirdIndex);
      setUser({ ...user, avatar: birds[newBirdIndex] });
    }
  };

  const prevAvatar = () => {
    console.log("prev arrow clicked!");

    const currentHistory = [...history];

    if (history.length > 1) {
      currentHistory.pop();
      setHistory(currentHistory);
      const prevBirdIndex = currentHistory[currentHistory.length - 1];
      setBirdIndex(prevBirdIndex);
      setUser({ ...user, avatar: birds[prevBirdIndex] });
    }
  };

  // submit new user form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user.username === "") {
      return;
    }
    props.createSocket(user);
  };

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
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
            <Avatar
              src={birds[birdIndex]}
              sx={{ padding: 2, width: 150, height: 150 }}
            />
            <Avatar
              src={next}
              onClick={nextAvatar}
              sx={{ width: 30, height: 30 }}
            />
          </Box>
          <Typography component="h1" variant="h5">
            Songbird
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
    </Grow>
  );
};

export default UserForm;
