import React, { useEffect, useState } from 'react'
import { url } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListAlbums = () => {

  const [data, setData] = useState([])

  const fetchData = async ()=> {
    try {
      const response = await axios.get(`${url}/api/albums/list`);
      console.log("API Response:", response.data);
      if(response.data.success){
        setData(response.data.album)
        toast.success("Fetched albums")
      } else {
        setData([])
        toast.error("No albums found")
      }
    } catch (error) {
      console.log(error.message)
      toast.error("Error while fetching album")
    }
  } 

  const removeAlbum = async (id)=> {
    try {
      const response = await axios.post(`${url}/api/albums/remove`, {id});
      if(response.data.success){
        toast.success(response.data.message);
        await fetchData();
      }
    } catch (error) {
      console.log(error.message)
      toast.error("Error occurred while listing albums")
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
     <div className=''>
      <h2 className='text-white tex-xl tracking-wider font-mono'>All Albums List</h2>
      <br />
      <div>
        <div className='sm:grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-600 text-white/90 font-mono text-sm mr-5 bg-gray-800'>
          <b>Image</b>
          <b>Name</b>
          <b>Desc</b>
          <b>Genre</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {Array.isArray(data) && data.map((item,idx)=>{
          return (
            <div key={idx} className='grid grid-cols-[1fr 1fr 1fr] sm:grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-700 text-sm mr-5 text-white/90'>
              <img src={item.image} className='w-12' alt="image" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <p>{item.genre}</p>
              <input type="color" value={item.bgColor} readOnly />
              <p onClick={()=>removeAlbum(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
     </div> 
    </>
  )
}

export default ListAlbums
