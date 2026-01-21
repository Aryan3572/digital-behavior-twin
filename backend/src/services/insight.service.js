import prisma from "../config/db.js";

const isFocusCategory = function (category) {
    return category === "DeepWork" || category === "Learning";
};

export const getDailyInsights = async function (userId, date) {

    const start = new Date(date);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setUTCHours(23, 59, 59, 999);

    const activities = await prisma.activity.findMany({
        where: {
            userId,
            date: {
                gte: start,
                lte: end,
            },
        },
    });

    let focusTime = 0;
    let distractionTime = 0;
    let longestFocus = 0;

    activities.forEach(function (a) {
        const duration =
            (new Date(a.endTime) - new Date(a.startTime)) / (1000 * 60);

        if (isFocusCategory(a.category)) {
            focusTime += duration;
            longestFocus = Math.max(longestFocus, duration);
        } else if (a.category === "Distraction") {
            distractionTime += duration;
        }
    });

    return {
        date,
        focusTime,
        distractionTime,
        totalSessions: activities.length,
        longestFocus,
    };
};

export const getWeeklyInsights = async function (userId, start, end) {

    const activities = await prisma.activity.findMany({
        where: {
            userId,
            date: {
                gte: new Date(start),
                lte: new Date(end),
            },
        },
    });

    const dayMap = {};

    activities.forEach(function (a) {
        const day = a.date.toISOString().split("T")[0];
        const duration =
            (new Date(a.endTime) - new Date(a.startTime)) / (1000 * 60);

        if (!dayMap[day]) {
            dayMap[day] = { focus: 0, distraction: 0 };
        }

        if (isFocusCategory(a.category)) {
            dayMap[day].focus += duration;
        } else if (a.category === "Distraction") {
            dayMap[day].distraction += duration;
        }
    });

    return dayMap;
};
