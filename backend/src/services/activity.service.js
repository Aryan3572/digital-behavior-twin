import prisma from "../config/db.js";

export const createActivity = async function (userId, data) {
    return prisma.activity.create({
        data: {
            ...data,
            startTime: new Date(data.startTime),
            endTime: new Date(data.endTime),
            date: new Date(data.date), // 🔥 FIX
            userId,
        },
    });
};
export const getDailyActivities = async function (userId, date) {
    const start = new Date(date);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setUTCHours(23, 59, 59, 999);

    return prisma.activity.findMany({
        where: {
            userId,
            date: {
                gte: start,
                lte: end,
            },
        },
        orderBy: {
            startTime: "asc",
        },
    });
};

export const getWeeklyActivities = async function(userId , startDate , endDate) {
    return prisma.activity.findMany({
        where: {
            userId,
            date: {
                gte: new Date(startDate),
                lte: new Date(endDate),
            },
        },
        orderBy: {
            date: "asc",
        },
    });
};