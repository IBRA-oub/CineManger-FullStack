import express from "express";
import ReservationController from "../controllers/ReservationController.js";
import validateToken from "../middleware/validateTokenHandler.js";
import checkRole from "../middleware/checkRole.js";

const router = express.Router();

router.get('/allReservation',validateToken, checkRole("client"),  ReservationController.getAllReservation);
router.post('/createReservation',validateToken, checkRole("client"), ReservationController.createReservation);
router.get('/getReservation/:id',validateToken, checkRole("client"), ReservationController.getReservation);
router.delete('/deleteReservation/:id',validateToken, checkRole("client"), ReservationController.deleteReservation);

export default router;