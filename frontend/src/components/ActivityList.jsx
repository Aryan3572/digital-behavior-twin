import Card from "./ui/Card";

export default function ActivityList({ activities }) {
  if (!activities.length) {
    return (
      <div className="text-center text-textMuted py-10">
            <p>No activities yet</p>
            <p className="text-xs mt-1">
                Start by logging your first focus session 🚀
            </p>
     </div>

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
