import React, { useContext, useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
// import { albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayPlayer = () => {
    const { albumsData } = useContext(PlayerContext)

    const displayRef = useRef();
    const location = useLocation()
    const isAlbumClicked = location.pathname.includes("album")
    const albumId = isAlbumClicked ? location.pathname.split('/').pop() : ""
    // const albumBgColor = albumsData[Number(albumId)].bgColor
    const albumBgColor = isAlbumClicked && albumsData.length > 0 ? albumsData.find((x)=>(x._id === albumId)).bgColor : "#121212"
    // console.log(albumBgColor);
    
    useEffect(()=> {
        if(isAlbumClicked){
            displayRef.current.style.background = `linear-gradient(${albumBgColor},#121212)`
        }
        else{
            displayRef.current.style.background = `#121212`
        }
    },[isAlbumClicked, albumBgColor])
    

  return (
    <>
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded-md bg-[#030712] text-white overflow-auto lg:w-[75%] lg:ml-3'>
             {albumsData.length > 0 ? 
             <Outlet /> 
             : null
            }
        </div> 
    </>
  )
}

export default DisplayPlayer
