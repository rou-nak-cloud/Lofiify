import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import MusicPlayer from '../components/MusicPlayer'
import { Outlet } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const UserLayout = () => {
  const { songsData, albumsData } = useContext(PlayerContext)
  return (
    <>
      <div className="h-screen bg-[#030712]">
       { // to prevent from loading component before the songs data array loads the data
        songsData.length !== 0 ? 
        <>
         <div className="h-[90%] flex">
          <Sidebar />
         <Outlet /> {/* User pages go here */}
        </div>
        <div className="h-[10%]">
          <MusicPlayer />
        </div>
        </>
        : <div className="text-white flex items-center justify-center h-full">
            Loading...
          </div>
       }
       </div> 
    </>
  )
}

export default UserLayout
