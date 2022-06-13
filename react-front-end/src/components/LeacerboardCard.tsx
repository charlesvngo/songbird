import React from 'react';
import {ListItem, Divider, ListItemAvatar , ListItemText, Avatar   } from '@mui/material';
import { ILeaderboardCardProps } from '../interfaces/LeaderBoardInterfaces'
import bird from '../assets/bird_4.png'

const LeaderboardCard = (props: ILeaderboardCardProps) => {

return(
  <div>
    <ListItem>
      <ListItemAvatar>
        <Avatar src={bird} sx={{ width:50, height:50 }}/>
      </ListItemAvatar>
      <ListItemText primary = {props.user.username}/>
      <ListItemText primary = {`Score: ${props.user.score}`}/> 
    </ListItem>
    <Divider />   
  </div>
  )
}

export default LeaderboardCard