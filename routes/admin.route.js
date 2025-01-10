import { Router } from "express";
import {AdminController} from '../controllers/admin.controller.js'
import { verifyAdmin, verifyToken } from "../middlewares/jwt.middleware.js";


const router = Router()

router.get('/view-all-clients', verifyToken,verifyAdmin, AdminController.viewAllClient)
router.get('/view-client/:uid',verifyToken,verifyAdmin, AdminController.viewClient)
router.get('/view-all-instructors',verifyToken,verifyAdmin, AdminController.viewAllInstructor)
router.get('/view-instructor/:uid',verifyToken,verifyAdmin, AdminController.viewInstructor)


export default router;