import React from "react";

// interfaces
import { IAudioProps } from "../Interfaces";

const AudioPlayer = (props: IAudioProps) => {

  console.log(props.src)
  return (
    <div>
      <h5>Audio play? </h5>
      <audio autoPlay className="media" id = "songTrack">
        <source src={props.src} type="audio/mpeg" />
        Your browser does not support MP3
      </audio>
    </div>
  );
};

export default AudioPlayer;
