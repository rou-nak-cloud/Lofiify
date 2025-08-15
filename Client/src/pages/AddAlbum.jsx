import React, { useState } from "react";
import { assets } from "../fullAssets/assets/admin-assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [color, setColor] = useState("#f121212");
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [genre, setGenre] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData()

      formData.append('name',name)
      formData.append('desc',desc)
      formData.append('genre',genre)
      formData.append('image',image)
      formData.append('bgColor',color)

      const response = await axios.post(`${url}/api/albums/add`, formData);
      if(response.data.success){
        toast.success("Album added");
        setName("")
        setDesc("")
        setGenre("")
        setImage("")
      } else {
        toast.error("Can't add to album")
      }
    } catch (error) {
      console.log(error.message)
      toast.error("Something went wrong, can't add")
    }
    setLoading(false);
  }

  return loading ? (
    <>
    <div className="grid place-items-center mon-h-[60vh]">
      <div className="w-15 h-15 place-self-center border-4 border-gray-600 border-t-green-700 rounded-full animate-spin"></div>
    </div>
    </>
  ) : (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8"     action="">
        <div className="flex gap-22">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-wider text-white/90">
              Upload Image
            </h2>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                className="w-25 cursor-pointer"
                alt="upload"
              />
            </label>
          </div>

          <div className="flex flex-col items-center gap-3 mt-1">
            <h2 className="text-lg font-bold tracking-wider text-white/90">
              Background Color
            </h2>
            <input onChange={(e)=>setColor(e.target.value)} value={color}
              type="color"
              className="w-10 h-10 rounded-full border-2 border-gray-700 p-1 cursor-pointer "
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h2 className="text-lg font-bold tracking-wider text-white/90">
            ALbum Name
          </h2>
          <input onChange={(e)=>setName(e.target.value)} value={name}
            required
            type="text"
            placeholder="type here"
            className="bg-transparent outline-green-700 border-2 border-gray-700 p-2.5 w-[max(40vw,250px)] placeholder:text-gray-500 rounded-md text-white/90"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-lg font-bold tracking-wider text-white/90">
            ALbum Description
          </h2>
          <input onChange={(e)=>setDesc(e.target.value)} value={desc}
            required
            type="text"
            placeholder="type here"
            className="bg-transparent outline-green-700 border-2 border-gray-700 p-2.5 w-[max(40vw,250px)] placeholder:text-gray-500 rounded-md text-white/90"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-lg font-bold tracking-wider text-white/90">
            Genre
          </h2>
          <input onChange={(e)=>setGenre(e.target.value)} value={genre}
            type="text"
            placeholder="type here"
            className="bg-transparent outline-green-700 border-2 border-gray-700 p-2.5 w-[max(40vw,250px)] placeholder:text-gray-500 rounded-md text-white/90"
          />
        </div>

        <button
          type="submit"
          className="text-base bg-green-800/80 text-white/90 py-2.5 px-12 cursor-pointer rounded-xl tracking-wider font-mono hover:bg-green-900/90 transition-colors delay-100"
        >
          Add Album
        </button>
      </form>
    </>
  );
};

export default AddAlbum;
