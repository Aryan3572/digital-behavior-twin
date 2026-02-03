import prisma from "../config/db.js";

function getBucket(hour) {
  if (hour >= 5 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 17) return "Afternoon";
  if (hour >= 17 && hour < 21) return "Evening";
  return "Night";
}

export async function getTimeOfDayProductivity(userId, startDate, endDate) {
  const activities = await prisma.activity.findMany({
    where: {
      userId,
      date: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
  });

  const buckets = {
    Morning: { focus: 0, distraction: 0 },
    Afternoon: { focus: 0, distraction: 0 },
    Evening: { focus: 0, distraction: 0 },
    Night: { focus: 0, distraction: 0 },
  };

  activities.forEach((a) => {
    const hour = new Date(a.startTime).getHours();
    const bucket = getBucket(hour);

    const duration =
      (new Date(a.endTime) - new Date(a.startTime)) / 60000;

    if (a.category === "Distraction") {
      buckets[bucket].distraction += duration;
    } else {
      buckets[bucket].focus += duration;
    }
  });

  const result = {};

  for (const bucket in buckets) {
    const { focus, distraction } = buckets[bucket];
    result[bucket] = {
      focus: Math.round(focus),
      distraction: Math.round(distraction),
      productivityScore: Math.round(focus - distraction * 0.5),
    };
  }

  return result;
}
