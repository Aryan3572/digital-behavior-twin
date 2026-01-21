import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { daily, weekly } from "../controllers/insight.controller.js";

const router = express.Router();

router.get("/day", authMiddleware, daily);
router.get("/week", authMiddleware, weekly);

export default router;
