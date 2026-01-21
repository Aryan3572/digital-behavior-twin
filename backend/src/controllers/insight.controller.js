import { getDailyInsights, getWeeklyInsights } from "../services/insight.service.js";

export const daily = async (req, res) => {
  try {
    const { date } = req.query;
    const insights = await getDailyInsights(req.user.id, date);
    res.json(insights);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const weekly = async (req, res) => {
  try {
    const { start, end } = req.query;
    const insights = await getWeeklyInsights(req.user.id, start, end);
    res.json(insights);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
