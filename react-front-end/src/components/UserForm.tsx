import React, { useState } from "react";
import { IUserFormProps, IUser } from "../Interfaces";

// helpers
import { getUrlParams } from "../helpers/roomGenerator";

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
  Alert,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

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
import bird11 from "../assets/bird_11.png";
import bird12 from "../assets/bird_12.png";
import bird13 from "../assets/bird_13.png";
import bird14 from "../assets/bird_14.png";
import bird15 from "../assets/bird_15.png";
import bird16 from "../assets/bird_16.png";
import bird17 from "../assets/bird_17.png";
import bird18 from "../assets/bird_18.png";

const UserForm = (props: IUserFormProps) => {
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
    bird11,
    bird12,
    bird13,
    bird14,
    bird15,
    bird16,
    bird17,
    bird18,
  ];
  const [birdIndex, setBirdIndex] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [user, setUser] = useState<IUser>({
    id: "",
    username: "",
    roomId: "",
    score: 0,
    roundScore: 0,
    avatar: birds[birdIndex],
    host: false,
    winning: false,
  });
  const [roomId, setRoomId] = useState<string>(getUrlParams());

  const nextAvatar = (): void => {
    const currentHistory = [...history];
    let newBirdIndex: number = birdIndex;
    newBirdIndex++;

    if (newBirdIndex < birds.length) {
      setHistory([...currentHistory, newBirdIndex]);
      setBirdIndex(newBirdIndex);
      setUser({ ...user, avatar: birds[newBirdIndex] });
    }
  };

  const prevAvatar = (): void => {
    const currentHistory: number[] = [...history];

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
            // marginTop: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBack
            onClick={prevAvatar}
            sx={{ width: 30, height: 30 }}
          ></ArrowBack>

          <Avatar
            src={birds[birdIndex]}
            sx={{ padding: 2, width: 150, height: 150 }}
          />

          <ArrowForward
            onClick={nextAvatar}
            sx={{ width: 30, height: 30 }}
          ></ArrowForward>
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
            value={roomId}
            autoComplete="room-id"
            onChange={(e) => {
              setUser({ ...user, roomId: e.target.value });
              setRoomId(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "white" }}
          >
            {roomId ? "Join" : "Start Game"}
          </Button>
          {props.status === "full" && <Alert severity="error">Room full</Alert>}
        </Box>
      </Container>
    </Grow>
  );
};

export default UserForm;
