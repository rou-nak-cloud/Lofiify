import mongoose from 'mongoose'

const albumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required :true,
        },
        desc: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            require: true,
        },
    },
    { timestamps: true } 
);

export const AlbumModel = mongoose.model('AlbumModel', albumSchema)