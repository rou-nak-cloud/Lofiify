import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRouter.js';
import connectDb from './src/config/db.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoutes.js';

// app config
const app = express();
const port = process.env.PORT || 5000;
// DataBAse
connectDb();
connectCloudinary();

// middlewares
app.use(express.json())
app.use(cors())

// initializing routes
app.use('/api/songs',songRouter)
app.use('/api/albums',albumRouter)


app.get('/', (req,res)=> res.send("Server working"))
app.listen(port,()=>console.log(`Server is running on this ${port}`))