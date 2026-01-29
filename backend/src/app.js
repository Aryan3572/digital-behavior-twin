import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import authMiddleware from './middlewares/auth.middleware.js';
import activityRoutes from "./routes/activity.route.js"
import insightRoutes from "./routes/insight.route.js"
import patternInsightRoutes from "./routes/patternInsights.route.js";


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,               
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes)
app.use("/api/insights" , insightRoutes);
app.use("/api/pattern-insights", patternInsightRoutes);

app.get("/api/protected", authMiddleware, function(req,res) {
    res.json({
        message: "Access granted",
        user: req.user,
    });
});

app.get('/', function(req, res) {
    res.send("digital behavior twin backend is running");
})

export default app;