import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListSongs = () => {

  const [data, setData] = useState([])

  const fetchSongs = async ()=> {
    try {
      const response = await axios.get(`${url}/api/songs/list`)
      console.log(response.data)
      if(response.data.success){
        setData(response.data.songs)
      }
    } catch (error) {
      console.log("Error occurred while fetching songs list", error.message)
      toast.error("Cant fetched songs")
    }
  }

  const removeSong = async (id)=> {
    try {
      const response = await axios.post(`${url}/api/songs/remove`, {id})
      if(response.data.success){
        toast.success(response.data.message)
        await fetchSongs();
      }
    } catch (error) {
      toast.error("Error occur in deleting")
      console.log("error in deleting",error.message)
    }
  }

  useEffect(()=>{
    fetchSongs();
  },[]) 
  
  return (
    <>
    <div>
      <h2 className='text-white/90 font-bold tracking-wider text-xl'>All Songs List</h2>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-600 text-white/90 font-mono text-sm mr-5 bg-gray-800'>
          <b>Image</b>
          <b>Name</b>
          <b>Genre</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map((item,idx) => {
          return (
            <div key={idx} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-700 text-white/90 text-sm mr-5'>
              <img src={item.image} className='w-12' alt="image" />
              <p>{item.name}</p>
              <p>{item.genre}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p onClick={()=>removeSong(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default ListSongs
