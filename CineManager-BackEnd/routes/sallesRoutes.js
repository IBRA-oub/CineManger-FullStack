import express from "express";
import SalleController from "../controllers/SalleController.js";
import validateToken from "../middleware/validateTokenHandler.js";
import checkRole from "../middleware/checkRole.js";


const router = express.Router();

router.get('/allSalle',validateToken, checkRole("admin"), SalleController.getAllSalle);
router.post('/createSalle',validateToken, checkRole("admin"), SalleController.createSalle);
router.get('/getSalle/:id',validateToken, checkRole("admin"), SalleController.getSalle);
router.put('/updateSalle/:id',validateToken, checkRole("admin"), SalleController.updateSalle);
router.delete('/deleteSalle/:id',validateToken, checkRole("admin"), SalleController.deleteSalle);

export default router;