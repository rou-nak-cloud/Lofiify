import { v2 as cloudinary } from 'cloudinary'
import { cloudinaryName } from './connectionName.js'

const connectCloudinary = async () => {
    try {
       await cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
        })
        console.log(`Cloudinary established with ${cloudinaryName}`)
    } catch (error) {
        console.log("Cloudinary connection failed", error.message)
        process.exit(1);
    }
}

export default connectCloudinary;