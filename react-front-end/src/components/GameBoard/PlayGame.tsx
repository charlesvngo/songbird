import { AudioFileOutlined, PropaneSharp } from "@mui/icons-material";
import React from "react";
import { IPlayGameProps } from "../../Interfaces";

export const PlayGame = (props: IPlayGameProps) => {
  
  props.audio.src = props.track.preview_url
  props.audio.volume = 0.2;
  props.audio.play()
  props.audio.onended = () => {
    console.log("Song ended")
    props.endOfRound()
  }
  
  return (
    <>
    <h1>Game has started bro</h1>
    </>
    )
};
