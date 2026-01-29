import prisma from "../config/db.js"

export async function getPatternInsights(userId) {
    const activities = await prisma.activity.findMany({
        where: { userId},
    });

    if(!activities.length) {
        return {
            message: "Not enough data for insights."
        };
    }

    let totalDuration = 0;
    activities.forEach(function(a) {
        const duration = (new Date(a.endTime) - new Date(a.startTime)) / 60000;
        totalDuration += duration;
    });

    const avgSession = totalDuration / activities.length;


    const focusByDay = {};

    activities.forEach(function(a) {
        if(a.category === "DeepWork" || a.category === "Learning") {
            const day = new Date(a.date).toLocalDateString("en-US",{
                weekday: "long",
            });

            focusByDay[day] = (focusByDay[day] || 0) + ((new Date(a.endTime) - new Date(a.startTime)) / 60000);
        }
    });

    const  bestDay = Object.entries(focusByDay).sort((a,b) =>b[1] - a[1])[0]?.[0];

    const hoursFocus = new Array(24).fill(0);
    const hoursDistraction = new Array(24).fill(0);

    activities.forEach(function(a){
        const startHour = new Date(a.startTime).getHours();
        const duration = (new Date(a.endTime)-new Date(a.startTime)) / 60000;

        if(a.category === "Distraction") {
            hoursDistraction[startHour] += duration;
        }
        else{
            hourFocus[startHour] += duration;
        }
    });
    
    const bestFocusHour = hoursFocus.indexOf(Math.max(...hoursFocus));
    const worstDistractionHour = hoursDistraction.indexOf(Math.max(...hoursDistraction));

    return {
        avgSession: Math.round (avgSession),
        bestDay,
        bestFocusHour,
        worstDistractionHour,   
    };
}