import { getCategoryDistribution } from "../services/categoryDistribution.service.js";

export async function categoryDistributionController(req, res) {
  try {
    const userId = req.user.id;
    const { start, end } = req.query;

    const data = await getCategoryDistribution(userId, start, end);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to compute category distribution" });
  }
}
