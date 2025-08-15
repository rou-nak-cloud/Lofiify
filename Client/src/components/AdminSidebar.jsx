import React from 'react'
import { assets } from '../fullAssets/assets/admin-assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const adminSidebar = () => {
  const navigate = useNavigate();
  return (
    <>
     <div className='bg-[#1e293b] min-h-screen pl-[4vw] pr-5'>
        <img onClick={()=>navigate('/')} src={assets.logo} className='mt-5 w-[max(10vw,80px)] hidden sm:block' alt="logo" />
        <img onClick={()=>navigate('/')} src={assets.logo_small} className='mt-5 w-[max(5vw,40px)] sm:hidden block' alt="logo" />

        <div className='flex flex-col gap-5 mt-10'>
          {/* relative path means no '/' */}
          <NavLink to='addSong' className='flex items-center gap-2.5 text-zinc-100 rounded-lg bg-[#15803d] border border-black p-2 pr-[max(8vw,10px)] text-sm font-semibold cursor-pointer hover:bg-[#22c55e] transition-colors delay-100'>
            <img src={assets.add_song} alt="addSong" />
            <p className='hidden sm:block'>Add Song</p>
          </NavLink>
          <NavLink to='listSong' className='flex items-center gap-2.5 text-zinc-100 rounded-lg bg-[#15803d] border border-black p-2 pr-[max(8vw,10px)] text-sm font-semibold cursor-pointer hover:bg-[#22c55e] transition-colors delay-100'>
            <img src={assets.song_icon} alt="addSong" />
            <p className='hidden sm:block'>List Song</p>
          </NavLink>
          <NavLink to='addAlbum' className='flex items-center gap-2.5 text-zinc-100 rounded-lg bg-[#15803d] border border-black p-2 pr-[max(8vw,10px)] text-sm font-semibold cursor-pointer hover:bg-[#22c55e] transition-colors delay-100'>
            <img src={assets.add_album} alt="addSong" />
            <p className='hidden sm:block'>Add Album</p>
          </NavLink>
          <NavLink to='listAlbum' className='flex items-center gap-2.5 text-zinc-100 rounded-lg bg-[#15803d] border border-black p-2 pr-[max(8vw,10px)] text-sm font-semibold cursor-pointer hover:bg-[#22c55e] transition-colors delay-100'>
            <img src={assets.album_icon} alt="addSong" />
            <p className='hidden sm:block'>List Album</p>
          </NavLink>

        </div>
     </div>
    </>
  )
}

export default adminSidebar
