import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='flex items-center justify-between font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="left" />
            <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="right" />
        </div>
        <div className='flex items-center gap-4'>
            <button className='bg-white/90 text-black text-[15px] px-4 py-2 rounded-2xl hidden md:block cursor-pointer hover:bg-white/70 transition-colors'>Explore Premium
            </button>
             <p className='bg-[#111827] py-2 px-4 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
             <p className='bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center text-black'>R</p>
        </div> 
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1.5 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1.5 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar
