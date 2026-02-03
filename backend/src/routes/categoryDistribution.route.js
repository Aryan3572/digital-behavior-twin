import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { categoryDistributionController } from "../controllers/categoryDistribution.controller.js";

const router = express.Router();

router.get("/", authMiddleware, categoryDistributionController);

export default router;