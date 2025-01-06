import { Router } from "express";
import { EventController } from "../controllers/events.controller.js";

const router = Router()

router.post('/add_event',EventController.addEvent)

export default router;