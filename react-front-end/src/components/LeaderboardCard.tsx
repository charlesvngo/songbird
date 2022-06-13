import React from 'react';
import {ListItem, Divider, ListItemAvatar , ListItemText, Avatar   } from '@mui/material';
import { ILeaderboardCardProps } from '../interfaces/LeaderBoardInterfaces'

const LeaderboardCard = (props: ILeaderboardCardProps) => {

return(
  <div>
    <ListItem>
      <ListItemAvatar>
        <Avatar src={props.user.avatar} sx={{ width:50, height:50 }}/>
      </ListItemAvatar>
      <ListItemText primary = {props.user.username}/>
      <ListItemText primary = {`Score: ${props.user.score}`}/> 
    </ListItem>
    <Divider />   
  </div>
  )
}

export default LeaderboardCard