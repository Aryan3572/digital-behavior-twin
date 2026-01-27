export default function DailyInsights({ insights }) {
    if(!insights) return null;

    return (
        <div className="border p-4 mb-6">
            <h2 className="text-xl mb-2">Today's Insights</h2>
            <p>Focus Time: {Math.round(insights.focusTime)} mins</p>
            <p>Distraction Time: {Math.round(insights.distractionTime)} mins</p>
            <p>Longest Focus Session: {Math.round(insights.longestFocusSession)} mins</p>
        </div>
    );
}