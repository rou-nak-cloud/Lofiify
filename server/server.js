import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// app config
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

// initializing routes
app.get('/', (req,res)=> res.send("Server working"))

app.listen(port,()=>console.log(`Server is running on this ${port}`))