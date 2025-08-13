import mongoose from 'mongoose'

const songsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required :true,
        },
        desc: {
            type: String,
            required: true,
        },
        album: {
            type: String,
            // required: true,
        },
        image: {
            type: String,
            required: true,
        },
        file: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            require: true,
        }
    },
    { timestamps: true } 
);

export const SongsModel = mongoose.model('SongsModel', songsSchema)