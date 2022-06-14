import React from "react";
import { IChatboxProps } from "../Interfaces";
import {
  Box,
  List,
  ListItem,
  TextField,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import bird from "../assets/bird_logo.png";

const Chatbox = (props: IChatboxProps) => {
  const chat = props.messages.map((m, i) => {
    return (
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
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    props.sendMessage(e);
    props.setMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        border: 3,
        margin: 1,
        height: "98vh",
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
  );
};

export default Chatbox;
