import express from "express"
import { getTravel } from '../controller/travel_controller.js';

const router = express.Router();
router.get("/", getTravel);

export default router;