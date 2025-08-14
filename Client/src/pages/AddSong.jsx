import React, { useState } from "react";
import { assets } from "../fullAssets/assets/admin-assets/assets";
import axios from 'axios'
import { url } from "../App";
import { toast } from "react-toastify";

const AddSong = () => {

  const [image, setImage] = useState(false)
  const [song, setSong] = useState(false)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [genre, setGenre] = useState("")
  const [album, setAlbum] = useState("none")
  const [loading, setLoading] = useState(false)
  const [albumData, setAlbumData] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    try {
      const formData = new FormData();

      formData.append('name', name)
      formData.append('desc', desc)
      formData.append('genre', genre)
      formData.append('image', image)
      formData.append('audio', song)
      formData.append('album', album)

      const response = await axios.post(`${url}/api/songs/add`, formData)
      if(response.data.success){
        toast.success("Song added")
        setName("")
        setDesc("")
        setGenre("")
        setAlbum("none")
        setImage(false)
        setSong(false)
      } 
      else{
        toast.error("Cant added the song")
      } 

    } catch (error) {
      console.log("error occurred", error.message);
      toast.error("Error occurred")
    }
    setLoading(false)
  }

  return loading ? (
    <>
    <div className="grid place-items-center min-h-[60vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-600 border-t-green-700 rounded-full animate-spin">
      </div>
    </div>
    </>
  ) : (
    <>
      <form onSubmit={handleSubmit} action="#">
        <div className="flex flex-col items-start gap-8 text-white/80">
          <div className="flex gap-20 p-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-wider">Upload Song</h2>
              <input onChange={(e)=>setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
              <label htmlFor="song">
                <img
                  src={song ? assets.upload_added : assets.upload_song}
                  alt="upload"
                  className="w-35 cursor-pointer rounded-md"
                />
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-wider">Upload Image</h2>
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt="upload"
                  className="w-35 cursor-pointer rounded-md"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 mt-1">
              <h2 className="text-lg font-mono tracking-wider">Album</h2>
              <select
              onChange={(e)=>setAlbum(e.target.value)} defaultValue={album}
              name="" id=""
              className="bg-transparent outline-green-600 rounded-md border-2 border-gray-700 p-2.5 w-[190px]"
              >
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold tracking-wider">Song Name</h2>
            <input
              onChange={(e)=>setName(e.target.value)} value={name}
              type="text"
              id=""
              className="bg-transparent outline-green-700 border-2 border-gray-700 rounded-md p-2.5 w-[max(40vw,250px)] placeholder:text-gray-600"
              placeholder="type here"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold tracking-wider">Song Description</h2>
            <input
              onChange={(e)=>setDesc(e.target.value)} value={desc}
              type="text"
              id=""
              className="bg-transparent outline-green-700 border-2 border-gray-700 rounded-md p-2.5 w-[max(40vw,250px)] placeholder:text-gray-600"
              placeholder="type here"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold tracking-wider">Song Genre</h2>
            <input
              onChange={(e)=>setGenre(e.target.value)} value={genre}
              type="text"
              id=""
              className="bg-transparent outline-green-700 border-2 border-gray-700 rounded-md p-2.5 w-[max(40vw,250px)] placeholder:text-gray-600"
              placeholder="type here"
              required
            />
          </div>

          <button type="submit" className="text-base bg-green-800/80 text-white/90 py-2.5 px-12 cursor-pointer rounded-xl tracking-wider font-mono hover:bg-green-900/90 transition-colors delay-100">
            Add Song
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSong;
