import { createActivity, getDailyActivities , getWeeklyActivities } from "../services/activity.service.js";

export const addAcitvity = async function(req, res) {
    try {
        const activity = await createActivity(req.user.id, req.body);
        res.status(201).json(activity);
    }
    catch(error) {
        res.status(400).json({ error: error.message});
    }
};

export const getDay = async function(req, res) {
    try {
        const { date } = req.query;
        const activities = await getDailyActivities(req.user.id , date);
        res.json(activities);
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
};

export const getWeek = async function(req, res) {
    try {
        const { start , end } = req.query;
        const activities = await getWeeklyActivities(req.user.id , start , end);
        res.json(activities);
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
};