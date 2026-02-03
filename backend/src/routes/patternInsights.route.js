import express from "express";
import patternInsightsController from "../controllers/patternInsights.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", auth, patternInsightsController);

export default router;
