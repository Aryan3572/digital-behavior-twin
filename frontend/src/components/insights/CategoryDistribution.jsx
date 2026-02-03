import Card from "../ui/Card"

export default function CategoryDistribution({data}) {
    if(!data || !Object.keys(data).length) {
        return <Card>No category Data available</Card>
    }

      return (
    <Card>
      <h2 className="text-sm font-medium mb-4">
        Time Distribution
      </h2>

      <div className="space-y-3">
        {Object.entries(data).map(([category, percent]) => (
          <div key={category}>
            <div className="flex justify-between text-xs mb-1">
              <span>{category}</span>
              <span>{percent}%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-black rounded"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}