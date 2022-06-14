import React from "react";
import { IChatboxProps } from "../Interfaces"
import { Box, List, ListItem, TextField, Button, Avatar, ListItemAvatar } from "@mui/material";


const Chatbox = (props: IChatboxProps) => {  

  // const chat = props.messages.map((message, i) => {
  //  return (<ListItem>
  //     <ListItemAvatar>
  //       <Avatar
  //         src={props.user.avatar}
  //         sx={{ padding: 1, width: 20, height: 20 }}
  //       />
  //     </ListItemAvatar>
  //     <ListItemText primary={props.user.username} />
  //     <ListItemText primary={`Score: ${props.user.score}`} />
  //   </ListItem> 
  //   )})
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    props.sendMessage(e)
  }


  return (
    <Box sx={{ border: 3, padding: 2, width: 300, height: "auto" }}>
      <List>
        {props.messages.map((message, i) => <ListItem key={i}>{message}</ListItem>)}
      </List>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
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