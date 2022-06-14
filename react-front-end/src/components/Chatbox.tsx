import React from "react";
import { IChatboxProps } from "../Interfaces";
import {
  Box,
  List,
  ListItem,
  TextField,
  Button,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const Chatbox = (props: IChatboxProps) => {
  const chat = props.messages.map((m, i) => {
    return (
      <ListItem>
        <ListItemAvatar>
          {m.avatar && (
            <Avatar src={m.avatar} sx={{ padding: 1, width: 40, height: 40 }} />
          )}
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
    <Box sx={{ border: 3, padding: 2, width: 300, height: "auto" }}>
      <List>{chat}</List>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="message"
          name="message"
          value={props.message}
          onChange={(e) => props.setMessage(e.target.value)}
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbox;
