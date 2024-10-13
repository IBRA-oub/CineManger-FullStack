import express from "express";
import AdminController from "../controllers/AdminController.js";
import validateToken from "../middleware/validateTokenHandler.js";
import checkRole from "../middleware/checkRole.js";
const router = express.Router();

router.get('/allAdmin', validateToken, checkRole("admin"), AdminController.getAllAdmin);
router.post('/createAdmin', validateToken, checkRole("admin"), AdminController.createAdmin);
router.get('/getAdmin/:id', validateToken, checkRole("admin"), AdminController.getAdmin);
router.put('/updateAdmin/:id', validateToken, checkRole("admin"), AdminController.updateAdmin);
router.delete('/deleteAdmin/:id', validateToken, checkRole("admin"), AdminController.deleteAdmin);

export default router;