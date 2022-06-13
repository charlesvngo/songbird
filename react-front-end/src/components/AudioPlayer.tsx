import React from "react";
import { IAudioProps } from "../Interfaces";

const AudioPlayer = (props: IAudioProps) => {
  return (
    <div>
      <h5>Audio play?</h5>
      <audio autoPlay className="media">
        <source src={props.src} type="audio/mpeg" />
        Your browser does not support MP3
      </audio>
    </div>
  );
};

export default AudioPlayer;
