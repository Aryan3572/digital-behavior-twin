import { getTimeOfDayProductivity } from "../services/timeOfDayProductivity.service.js";

export async function timeOfDayProductivityController(req, res) {
  try {
    const userId = req.user.id;
    const { start, end } = req.query;

    const data = await getTimeOfDayProductivity(userId, start, end);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to compute time-of-day productivity" });
  }
}
