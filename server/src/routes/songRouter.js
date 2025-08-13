import { addSongs,listSongs } from "../components/songsController.js";
import express from 'express';

const songRouter = express.Router();

songRouter.post('/add', addSongs);
songRouter.get('/list', listSongs);

export default songRouter;