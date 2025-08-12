import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <>
        <div className='w-[25%] h-full flex-col gap-2 hidden lg:flex text-white/90'>
            <div className='bg-[#111827] h-[15%] rounded-lg flex flex-col justify-around'>
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home Icon" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="Search Icon" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>

            <div className='bg-[#111827] h-[85%] rounded-lg'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-7' src={assets.stack_icon} alt="Stack Icon" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-4 cursor-pointer' src={assets.arrow_icon} alt="arrow" />
                        <img className='w-4 cursor-pointer' src={assets.plus_icon} alt="plus" />
                    </div>
                </div>

                <div className='p-4 pl-4 flex flex-col items-start justify-start gap-1 m-2 rounded-md font-semibold bg-[#1f2937] '>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white/80 text-black/90 rounded-full mt-4 text-sm cursor-pointer hover:bg-white/70 transition-colors'>Create playlist</button>
                </div>
                <div className='p-4 pl-4 flex flex-col items-start justify-start gap-1 m-2 rounded-md font-semibold bg-[#1f2937] mt-4'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-2 bg-white/80 text-black/90 rounded-full mt-4 text-sm cursor-pointer hover:bg-white/70 transition-colors'>Browse podcasts</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar
