export default function ActivityList({activities}) {if (!activities.length) {
  return (
    <div className="border p-4 text-center text-gray-500">
      No activities logged today. Start by adding one 👆
    </div>
  );
}

    return (
        <ul className="space-y-2">
            {activities.map(function(a) {
                <li key={a.id} className="border p-3">
                    <strong>{a.title}</strong> - {a.category}
                    <br />
                    {new Date(a.startTime).toLocaleTimeString()} -{" "}
                    {new Date(a.endTime).toLocaleDateString()}
                </li>
            })}

        </ul>
    );
}