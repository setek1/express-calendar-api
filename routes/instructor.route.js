import { Router } from "express";
import { InstructorController } from "../controllers/instructor.controller.js";


const router =Router()

router.get('/profile',InstructorController.profileInstructor)

export default router;