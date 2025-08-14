import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

// Make sure imports start with uppercase
import AdminSidebar from './adminSidebar';
import AddSong from '../pages/addSong';
import ListSongs from '../pages/listSongs';
import AddAlbum from '../pages/addAlbum';
import ListAlbums from '../pages/listAlbums';

const Admin = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <AdminSidebar />

      <div className="flex-1 h-screen overflow-y-scroll bg-[#0f172a]">
        <div className="routes">
          <Routes>
            <Route path="addSong" element={<AddSong />} />
            <Route path="listSong" element={<ListSongs />} />
            <Route path="addAlbum" element={<AddAlbum />} />
            <Route path="listAlbums" element={<ListAlbums />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
