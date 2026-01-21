import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import authMiddleware from './middlewares/auth.middleware.js';
import activityRoutes from "./routes/activity.route.js"
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes)

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