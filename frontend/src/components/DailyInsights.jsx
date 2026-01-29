import Card from "./ui/Card";

export default function DailyInsights({ insights }) {
  if (!insights) return null;

  return (
    <Card className="bg-[#111827] border border-[#1F2937] rounded-xl p-4 mb-6">
      <h2 className="text-sm text-gray-400 mb-2">
        Today
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <Metric label="Focus" value={insights.focusTime} />
        <Metric label="Distraction" value={insights.distractionTime} />
        <Metric label="Longest" value={insights.longestFocusSession} />
      </div>
    </Card>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-mono text-lg">
        {Math.round(value)}m
      </p>
    </div>
  );
}
