import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { timeOfDayProductivityController } from "../controllers/timeOfDayProductivity.controller.js";

const router = express.Router();

router.get("/", authMiddleware, timeOfDayProductivityController);

export default router;
