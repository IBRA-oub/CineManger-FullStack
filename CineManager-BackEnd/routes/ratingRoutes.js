import express from "express";
import RatingController from "../controllers/RatingController.js";
import validateToken from "../middleware/validateTokenHandler.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.post('/rate/:id',validateToken,checkRole("client"),RatingController.createRating);
router.get('/all-rate/:id',RatingController.getAllRating);
router.get('/user-rate/:id',validateToken,checkRole("client"),RatingController.getRateByUser);

export default router;