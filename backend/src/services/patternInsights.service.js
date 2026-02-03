import prisma from "../config/db.js";

export async function getPatternInsights(userId) {
  const activities = await prisma.activity.findMany({
    where: { userId },
  });

  if (!activities.length) {
    return {
      message: "Not enough data for insights.",
    };
  }

  let totalDuration = 0;
  let validSessions = 0;

  activities.forEach((a) => {
    if (!a.startTime || !a.endTime) return;

    const duration =
      (new Date(a.endTime) - new Date(a.startTime)) / 60000;

    totalDuration += duration;
    validSessions++;
  });

  if (!validSessions) {
    return {
      message: "Not enough completed sessions for insights.",
    };
  }

  const avgSession = totalDuration / validSessions;

  const focusByDay = {};

  activities.forEach((a) => {
    if (!a.startTime || !a.endTime) return;

    if (a.category === "DeepWork" || a.category === "Learning") {
      const day = new Date(a.startTime).toLocaleDateString("en-US", {
        weekday: "long",
      });

      const duration =
        (new Date(a.endTime) - new Date(a.startTime)) / 60000;

      focusByDay[day] = (focusByDay[day] || 0) + duration;
    }
  });

  const bestDay = Object.entries(focusByDay)
    .sort((a, b) => b[1] - a[1])[0]?.[0];

  const hoursFocus = new Array(24).fill(0);
  const hoursDistraction = new Array(24).fill(0);

  activities.forEach((a) => {
    if (!a.startTime || !a.endTime) return;

    const startHour = new Date(a.startTime).getHours();
    const duration =
      (new Date(a.endTime) - new Date(a.startTime)) / 60000;

    if (a.category === "Distraction") {
      hoursDistraction[startHour] += duration;
    } else {
      hoursFocus[startHour] += duration;
    }
  });

  const bestFocusHour =
    hoursFocus.indexOf(Math.max(...hoursFocus));

  const worstDistractionHour =
    hoursDistraction.indexOf(Math.max(...hoursDistraction));

  return {
    avgSession: Math.round(avgSession),
    bestDay,
    bestFocusHour,
    worstDistractionHour,
  };
}
