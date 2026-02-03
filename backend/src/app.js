import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import authMiddleware from './middlewares/auth.middleware.js';
import activityRoute from "./routes/activity.route.js"
import insightRoute from "./routes/insight.route.js"
import patternInsightRoute from "./routes/patternInsights.route.js";
import categoryDistributionRoute from "./routes/categoryDistribution.route.js";
import timeOfDayProductivityRoutes from "./routes/timeOfDayProductivity.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,               
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoute)
app.use("/api/insights" , insightRoute);
app.use("/api/pattern-insights", patternInsightRoute);
app.use("/api/insights/category-distribution", categoryDistributionRoute)
app.use("/api/insights/time-of-day", timeOfDayProductivityRoutes);

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