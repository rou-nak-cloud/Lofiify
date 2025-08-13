import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import DisplayPlayer from "./components/DisplayPlayer";
import { PlayerContext } from "./context/PlayerContext";

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Admin from "./components/Admin";

const App = () => {
  const { audioRef,track  } = useContext(PlayerContext)

  const location = useLocation();
  const isAdminPage = location.pathname === "/admin"
  if(isAdminPage){
    return <Admin />
  }
  
  return (
    <>
      <div className="h-screen bg-[#030712]">
        <div className="h-[90%] flex">
          <Sidebar />
          <DisplayPlayer />
        </div>
        <div className="h-[10%]">
          <MusicPlayer />
        </div>
        <audio ref={audioRef} preload="auto" src={track.file}></audio>
      </div>
    </>
  );
};

export default App;
