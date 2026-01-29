import Card from "./ui/Card";

export default function ActivityList({ activities }) {
  if (!activities.length) {
    return (
      <Card className="p-4 text-center text-gray-500">
        No activities logged today. Start by adding one 👆
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <ul className="space-y-2">
        {activities.map((a) => (
          <li key={a.id} className="border p-3 rounded">
            <strong>{a.title}</strong> — {a.category}
            <br />
            {new Date(a.startTime).toLocaleTimeString()} -{" "}
            {new Date(a.endTime).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </Card>
  );
}
