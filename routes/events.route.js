import { Router } from "express";
import { EventController } from "../controllers/events.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = Router()

router.post('/add_event',verifyToken,EventController.addEvent)
router.get('/my_events',verifyToken,EventController.myEvent)

export default router;