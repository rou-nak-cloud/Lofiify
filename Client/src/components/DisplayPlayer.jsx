import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const DisplayPlayer = () => {

    const displayRef = useRef();
    const location = useLocation()
    const isAlbumClicked = location.pathname.includes("album")
    const albumId = isAlbumClicked ? location.pathname.split('/').pop() : ""
    const albumBgColor = albumsData[Number(albumId)].bgColor
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
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div> 
    </>
  )
}

export default DisplayPlayer
