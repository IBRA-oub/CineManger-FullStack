import express from 'express';
import validateToken from "../middleware/validateTokenHandler.js";
import checkRole from "../middleware/checkRole.js";
import CommentController from '../controllers/CommentController.js';

const router = express.Router();
router.post('/comment', validateToken, checkRole("client"), CommentController.createComment);
router.get('/all-movie-with-some-genre', validateToken, checkRole("client"), CommentController.getAllFilmWithSomeGenre);
router.get('/all-comment/:id', CommentController.getAllComment);
export default router;

