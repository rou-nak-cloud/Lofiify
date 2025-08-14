import React from 'react'
import Sidebar from '../components/Sidebar'
import MusicPlayer from '../components/MusicPlayer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
      <div className="h-screen bg-[#030712]">
        <div className="h-[90%] flex">
          <Sidebar />
         <Outlet /> {/* User pages go here */}
        </div>
        <div className="h-[10%]">
          <MusicPlayer />
        </div>
       </div> 
    </>
  )
}

export default UserLayout
