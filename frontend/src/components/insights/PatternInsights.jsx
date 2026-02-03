import Card from "../ui/Card"

function formatHour(hour) {
    if(hour === undefined || hour === null) return "--";
    const start = hour;
    const end = (hour+1)%24;
    return `${start}:00 - ${end}:00`;
}

export default function PatternInsights({data}) {
    if(!data || data.message) {
        return (
             <Card>
        <p className="text-sm text-gray-500">
          Not enough data to generate pattern insights yet.
        </p>
      </Card>
    );
  }
    return (
    <Card>
      <h2 className="text-sm font-medium mb-4">
        Behavior Patterns
      </h2>

      <ul className="space-y-3 text-sm">
        <li>
          🧠 <strong>Average focus session:</strong>{" "}
          {data.avgSession} minutes
        </li>

        <li>
          📅 <strong>Most productive day:</strong>{" "}
          {data.bestDay}
        </li>

        <li>
          ⏰ <strong>Best focus window:</strong>{" "}
          {formatHour(data.bestFocusHour)}
        </li>

        <li>
          ⚠️ <strong>Distractions spike around:</strong>{" "}
          {formatHour(data.worstDistractionHour)}
        </li>
      </ul>
    </Card>
  );
}