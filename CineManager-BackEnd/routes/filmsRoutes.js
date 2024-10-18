import express from "express";
import FilmController from "../controllers/FilmController.js";
import validateToken from "../middleware/validateTokenHandler.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.get('/allFilm', FilmController.getAllFilm);
router.post('/createFilm',validateToken, checkRole("admin"), FilmController.createFilm);
router.get('/getFilm/:id', FilmController.getFilm);
router.get('/getSumFilm', FilmController.getSumFilm);
router.put('/updateFilm/:id',validateToken, checkRole("admin"), FilmController.updateFilm);
router.delete('/deleteFilm/:id',validateToken, checkRole("admin"), FilmController.deleteFilm);

export default router;