import React from "react";
import { IEndOfGameProps, IUser } from "../../Interfaces";
import { ListItem, ListItemAvatar, Avatar, Divider, ListItemText, Box } from "@mui/material";

export const EndOfGame = (props: IEndOfGameProps) => {

  const sortedUsers = props.users.sort((a: IUser,b: IUser) : number => b.roundScore - a.roundScore)
  const users = sortedUsers.map((user, i) => {
    let bgc = "inhert"
    if(i === 2) bgc = "#a6e4ed"
    if(i === 1) bgc = "#7bcedb"
    if(i === 0) bgc =  "#3EA4B4"
   
    return (
      <Box sx={{ backgroundColor: bgc, width:"35vh", borderRadius: 6 }}>
        <ListItem sx={{ backgroundColor: "inherit" }}>
        <ListItemText
            sx={{ padding: 1, width: '2vh', fontSize: 38 }}
            primary={i+1}
            />
          <ListItemAvatar>
            <Avatar
              src={user.avatar}
              sx={{ padding: 1, width: 80, height: 80 }}
            />
          </ListItemAvatar>
           <ListItemText
            sx={{ padding: 1, width: '15vh' }}
            primary={user.username}
            />
            <ListItemText
            sx={{ padding: 1, width: '15vh'  }} 
            primary={`Score: ${user.score}`}
          />
        </ListItem>
        <Divider />
      </Box>
    );
  });

  
  return (
    <>
      <h1>Game Over</h1>
      {users}
    </>
  );
};
