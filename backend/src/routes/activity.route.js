import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js"
// import activityController from "../controllers/activityController.js"

import { addAcitvity, getDay, getWeek } from "../controllers/activity.controller.js";

const router = express.Router();

router.post("/",authMiddleware, addAcitvity);
router.get("/day",authMiddleware, getDay);
router.get("/week",authMiddleware, getWeek);


export default router;