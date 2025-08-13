import { v2 as cloudinary } from 'cloudinary'
import { SongsModel } from '../models/songModel.js';

const addSongs = async (req,res)=> {
    try {
         console.log("FILES:", req.files); // Check what Multer parsed
        console.log("BODY:", req.body);   // Check text fields

        // const { name, desc, album,}  = req.body;
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const imageFile = req.files.image[0]; // from upload multer
        const audioFile = req.files.audio[0]; // from upload multer

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image" });
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video" });
        const duration = `${Math.floor(audioUpload.duration/60)} : ${Math.floor(audioUpload.duration%60)}` // minutes : seconds

        // console.log(name, desc, album, audioUpload, imageUpload);

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration,
        }
        const song = SongsModel(songData)
        await song.save();

        res.status(201).json({
            success: true,
            message: "Song added"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Song not added",
            error: error.message
        })
    }
}

const listSongs = async (req,res)=> {
    try {
        const allSongs = await SongsModel.find({});
        res.status(201).json({
            success: true,
            message: "All Songs listed..",
            songs: allSongs
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve songs",
            error: error.message
        })
    }
}

export { addSongs, listSongs }