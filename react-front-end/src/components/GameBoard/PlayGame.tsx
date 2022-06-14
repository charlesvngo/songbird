import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import AudioPlayer from "../AudioPlayer";
import { IPlayGameProps } from "../../Interfaces";

export const PlayGame = (props: IPlayGameProps) => {
  console.log(props.track.preview_url)
  return (
    <>
    <h1>Game has started bro</h1>
    <AudioPlayer src = {props.track.preview_url}/>
    </>
    )
};
