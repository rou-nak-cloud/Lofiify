import React, { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Admin from "./components/Admin";

import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import DisplayPlayer from "./components/DisplayPlayer";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";

import AddSong from "./pages/addSong";
import ListSongs from "./pages/listSongs";
import AddAlbum from "./pages/addAlbum";
import ListAlbums from "./pages/listAlbums";
import DisplayAlbum from "./components/DisplayAlbum";
import DisplayHome from "./components/DisplayHome";

export const url = 'http://localhost:5009'


// import ListSongs from "./pages/ListSongs";
// import AddAlbum from "./pages/AddAlbum";
// import ListAlbums from "./pages/ListAlbums";

const App = () => {
  // const { audioRef,track  } = useContext(PlayerContext)

  // // const location = useLocation();
  // // const isAdminPage = location.pathname === "/admin"
  // // if(isAdminPage){
  //   // return <Admin />
  // // }
  
  // return (
  //   <>
  //     <div className="h-screen bg-[#030712]">
  //       <div className="h-[90%] flex">
  //         <Sidebar />
  //         <DisplayPlayer />
  //       </div>
  //       <div className="h-[10%]">
  //         <MusicPlayer />
  //       </div>
  //       <audio ref={audioRef} preload="auto" src={track.file}></audio>
  //     </div>
  //   </>
  // );

   const { audioRef,track  } = useContext(PlayerContext)
  return (
    <>
      <Routes>
        {/* User routes */}
          {/* userLayout => this is main parent layout where it has outlet for only displayPlayer */}
         <Route element={<UserLayout />}> 
          {/* displayPlayer is also a parent layout for rendering both displayHome and displayAlbum as a outlet */}
            <Route element={ <DisplayPlayer /> }>
               <Route path='/' element={<DisplayHome />} />
               <Route path='album/:id' element={<DisplayAlbum />} />
            </Route>
         </Route>

         {/* ADMIN ROUTES */}
          <Route path='/admin' element={<AdminLayout />}>
            {/* <Route path="" element={<AdminHome />} />  default */} 
            <Route path="addSong" element={<AddSong />} />
            <Route path="listSong" element={<ListSongs />} />
            <Route path="addAlbum" element={<AddAlbum />} />
            <Route path="listAlbum" element={<ListAlbums />} />
          </Route>

      </Routes>

      <audio ref={audioRef} preload="auto" src={track.file}></audio>
    </>
  )
};

export default App;
