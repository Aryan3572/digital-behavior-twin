import prisma from "../config/db.js";

export async function getCategoryDistribution(userId, startDate, endDate) {
  const activities = await prisma.activity.findMany({
    where: {
      userId,
      date: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
  });

  if (!activities.length) {
    return {};
  }

  const totals = {};
  let overallTime = 0;

  activities.forEach((a) => {
    const duration =
      (new Date(a.endTime) - new Date(a.startTime)) / 60000;

    totals[a.category] = (totals[a.category] || 0) + duration;
    overallTime += duration;
  });

  const distribution = {};

  for (const category in totals) {
    distribution[category] = Math.round(
      (totals[category] / overallTime) * 100
    );
  }

  return distribution;
}
