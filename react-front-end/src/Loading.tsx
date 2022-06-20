import React from "react";
import { ILoadingProps, ISocket } from "./Interfaces";

const Loading = (props: ILoadingProps) => {
  const socket: ISocket = props.socket;

    socket.on("joined-room", (data: string) =>{
      props.setStatus("success")
      console.log("Socket received success")
    })
    socket.on("room-full", (data: string) =>{
      props.setStatus("full")
      console.log("Socket received full")
    })

  return(
    <>    
    <h2>Loading</h2>
    </>
  ); 
};

export default Loading