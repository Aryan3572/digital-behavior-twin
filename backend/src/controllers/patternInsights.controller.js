import { getPatternInsights } from "../services/patternInsights.service.js";

export async function patternInsightsController(req, res) {
  try {
    const userId = req.user.id;

    const insights = await getPatternInsights(userId);

    res.json(insights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate pattern insights" });
  }
}

export default patternInsightsController;
