import React from "react";
import { IEndOfRoundProps } from "../../Interfaces";
import { ListItem, ListItemAvatar, Avatar,  Box, Divider, ListItemText } from "@mui/material";

export const EndOfRound = (props: IEndOfRoundProps) => {
  console.log(props.users);
  const sortedUsers = props.users.sort((a: any,b: any) : any =>a.score - b.score)
  const users = sortedUsers.map((user) => {
    return (
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={user.avatar}
              sx={{ padding: 1, width: 80, height: 80 }}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 1 }}
            primary={user.username}
            secondary={`Score: ${user.score}`}
          />
        </ListItem>
        <Divider />
      </div>
    );
  });
  console.log({users})
  
  return (
    <>
      <h1>End of Round</h1>
      {users}
    </>
  );
};
