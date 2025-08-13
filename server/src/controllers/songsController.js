import { v2 as cloudinary } from 'cloudinary'
import { SongsModel } from '../models/songModel.js';

const addSongs = async ()=> {
    try {
        const { name, desc, album,}  = req.body;
        const imageFile = req.files.image[0]; // from upload multer
        const audioFile = req.files.audio[0]; // from upload multer

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image" });

        console.log(name, desc, album, audioUpload, imageUpload);
        
    } catch (error) {
        console.log(error.message)
    }
}

const listSongs = async ()=> {

}
export { addSongs, listSongs }