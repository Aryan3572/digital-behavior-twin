import Card from "../ui/Card"

export default function TimeOfDayProductivity({ data }) {
  if (!data) return null;

  return (
    <Card>
      <h2 className="text-sm font-medium mb-4">
        Productivity by Time of Day
      </h2>

      <div className="space-y-4">
        {Object.entries(data).map(([bucket, values]) => (
          <div key={bucket}>
            <div className="flex justify-between text-xs mb-1">
              <span>{bucket}</span>
              <span>{values.productivityScore}</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-black rounded"
                style={{
                  width: `${Math.min(
                    Math.max(values.productivityScore, 0),
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}