import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongsItem = ({image, desc, name,id}) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
     <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded-md' src={image} alt="image" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-300 text-sm'>{desc}</p>
     </div>  
    </>
  )
}

export default SongsItem
