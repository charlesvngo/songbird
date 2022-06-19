import React, { useEffect, useState } from "react";
import { ILoadingProps, ISocket } from "./Interfaces";
import Game from "./Game";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";

const Loading = (props: ILoadingProps) => {
  const socket: ISocket = props.socket;
  const [status, setStatus] = useState<string>("");

  useEffect( ()  =>{
    socket.on("joined-room", (data: string) =>{
      setStatus("success")
    })
    socket.on("room-full", (data: string) =>{
      setStatus("full")
    })
  }, []);

  return(
    <>    
    <h2>Loading</h2>
    {status === 'success' && (
          <ThemeProvider theme={props.gameboardTheme}>
          <Game
            user={props.user}
            socket={socket}
            setUser={props.setUser}
            gameboardTheme={props.gameboardTheme}
          />
        </ThemeProvider>
    )}
    {status === 'fail' && (<App fail = {true}/>)}
    </>
  ); 
};

export default Loading