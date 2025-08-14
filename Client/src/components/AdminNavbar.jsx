import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const AdminNavbar = () => {
    const navigate = useNavigate();
  return (
    <>
     <div className='navbar flex items-center justify-between w-full border-b-2 border-[#15803d] text-white/90 px-5 sm:px-12 py-4 '>
     <div className='flex items-center gap-3'>
        <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="left" />
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="right" />
     </div>
        <h2 className='text-xl tracking-wider font-mono'> Admin Panel</h2>
        <p className='bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center text-black'>R</p>
     </div> 
    </>
  )
}

export default AdminNavbar