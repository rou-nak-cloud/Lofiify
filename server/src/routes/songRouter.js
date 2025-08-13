import { addSongs,listSongs } from "../controllers/songsController.js";
import express from 'express';
import upload from "../middlewares/multer.js";

const songRouter = express.Router();

songRouter.post('/add', upload.fields([{name: 'image', maxCount:1}, {name: 'audio', maxCount:1}]) ,addSongs);
// .fields() is used when you need different types of files uploaded together (e.g., image + audio), each with its own field name.

songRouter.get('/list', listSongs);

export default songRouter;