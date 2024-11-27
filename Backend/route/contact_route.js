import express from 'express';
const router = express.Router()
import { contactus } from "../controller/contact_controller.js"

router.post("/", contactus)

export default router;