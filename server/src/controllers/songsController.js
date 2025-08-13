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

        // console.log(name, desc, album, audioUpload, imageUpload);
        
    } catch (error) {
        console.log(error.message)
    }
}

const listSongs = async ()=> {

}
export { addSongs, listSongs }