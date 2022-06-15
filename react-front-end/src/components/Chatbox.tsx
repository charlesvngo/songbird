import React, { useRef } from "react";
import { IChatboxProps } from "../Interfaces";
import {
  Box,
  List,
  ListItem,
  TextField,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Grow,
  Slide,
} from "@mui/material";

// logo image
import bird from "../assets/bird_logo.png";

const Chatbox = (props: IChatboxProps) => {
  const containerRef = useRef(null);
  const chat = props.messages.map((m, i) => {
    return (
      <Slide
        key={i}
        direction="left"
        in={true}
        container={containerRef.current}
      >
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar
              src={m.avatar ? m.avatar : bird}
              sx={{ padding: 1, width: 40, height: 40 }}
            />
          </ListItemAvatar>
          {m.username ? (
            <ListItemText primary={m.username} secondary={m.message} />
          ) : (
            <ListItemText primary={m.message} />
          )}
        </ListItem>
      </Slide>
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    props.sendMessage(e);
    props.setMessage("");
  };

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
      <Box
        sx={{
          display: "flex",
          border: 3,
          borderRadius: 2,
          margin: 1,
          padding: 2,
          height: "93vh",
          flexDirection: "column-reverse",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="message"
            name="message"
            autoComplete="off"
            type="text"
            value={props.message}
            onChange={(e) => props.setMessage(e.target.value)}
            autoFocus
          />
        </Box>
        <List>{chat}</List>
      </Box>
    </Grow>
  );
};

export default Chatbox;
