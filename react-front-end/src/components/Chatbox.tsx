import React, { useEffect, useRef } from "react";
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
  Autocomplete,
} from "@mui/material";

// logo image
import bird from "../assets/bird_logo.png";

const Chatbox = (props: IChatboxProps) => {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState<string>("");
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

  useEffect(() => {
    props.setMessage(inputValue.slice(0, inputValue.indexOf("by:")).trimEnd());
  }, [inputValue]);

  useEffect(() => {
    setInputValue(props.message);
  }, [props.mode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    props.sendMessage(e);
    // Clear text boxes after sending
    props.setMessage("");
    setInputValue("");
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
          boxShadow: 5,
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {props.mode !== "ROUND" && (
            <TextField
              margin="normal"
              fullWidth
              id="message"
              name="message"
              autoComplete="off"
              type="text"
              placeholder="Your Guess"
              value={props.message}
              onChange={(e) => props.setMessage(e.target.value)}
              autoFocus
            />
          )}
          {props.mode === "ROUND" && (
            <Autocomplete
              fullWidth
              id="autocomplete-songlist"
              freeSolo
              value={value}
              onChange={(e: any, newValue) => setValue(newValue)}
              inputValue={inputValue}
              onInputChange={(e: any, newInputValue) =>
                setInputValue(newInputValue)
              }
              options={props.tracklist.map(
                (track) => `${track.name} by: ${track.artist}`
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  name="message"
                  type="text"
                  autoFocus
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
              ListboxProps={{
                style: {
                  maxHeight: "10vh",
                  flexWrap: "nowrap",
                  overflowX: "hidden",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                },
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <List id={"chatbox"}>{chat}</List>
        </Box>
      </Box>
    </Grow>
  );
};

export default Chatbox;
