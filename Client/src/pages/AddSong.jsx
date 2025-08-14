import React from "react";
import { assets } from "../fullAssets/assets/admin-assets/assets";

const AddSong = () => {
  return (
    <>
      <form action="#">
        <div className="flex flex-col items-start gap-8 text-white/80">
          <div className="flex gap-20 p-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-wider">Upload Song</h2>
              <input type="file" id="song" accept="audio/*" hidden />
              <label htmlFor="song">
                <img
                  src={assets.upload_song}
                  alt="upload"
                  className="w-35 cursor-pointer rounded-md"
                />
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold tracking-wider">Upload Image</h2>
              <input type="file" id="image" accept="image/*" hidden />
              <label htmlFor="image">
                <img
                  src={assets.upload_area}
                  alt="upload"
                  className="w-35 cursor-pointer rounded-md"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 mt-1">
              <h2 className="text-lg font-mono tracking-wider">Album</h2>
              <select name="" id=""
              className="bg-transparent outline-green-600 rounded-md border-2 border-gray-700 p-2.5 w-[190px]"
              >
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold tracking-wider">Song Name</h2>
            <input
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
