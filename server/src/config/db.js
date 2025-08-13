import mongoose from "mongoose";
import { dbName } from "./connectionName.js";
const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log(`Database connected successfully to ${dbName}`)
    } catch (error) {
        console.log("Database connection Failed:", error.message);
         process.exit(1); // stop server if DB fails
    }
}

export default connectDb;