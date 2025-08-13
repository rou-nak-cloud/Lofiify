import { v2 as cloudinary } from 'cloudinary'
import { AlbumModel } from '../models/albumModel.js'

const addAlbum = async (req,res) => {
    try {
        const { name,desc, bgColor, genre } = req.body;
        const imageFile = req.file;
        if(!imageFile){
            res.status(404).json({
                success: false,
                message: "No image file uploaded"
            })
        }
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        })

        const addAlbum = {
            name,
            desc,
            bgColor,
            genre,
            image: imageUpload.secure_url,
        }

        const album = AlbumModel(addAlbum)
        album.save()

        res.status(201).json({
            success: true,
            message: "Album added successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Album not added",
            error: error.message
        })
    }
}

const listAlbum = async (req,res) => {
    try {
        const allAlbums = await AlbumModel.find({})
        res.status(201).json({
            success: true,
            message: "Album list provided",
            album: allAlbums
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to provide album list",
            error: error.message
        })
    }
}

const removeAlbum = async (req,res) =>{
    try {
        await AlbumModel.findByIdAndDelete(req.body.id)
        res.status(201).json({
            success: true,
            message: "Album removed"
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: "Failed to remove album",
            error: error.message
        })
    }
}


export { addAlbum, listAlbum, removeAlbum }