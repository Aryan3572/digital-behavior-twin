import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import Card from "./ui/Card";

export default function WeeklyChart({ data }) {
  if (!data.length) return null;

  return (
    <Card className="border p-4 mt-6">
      <h2 className="text-xl mb-2">Weekly Focus vs Distraction</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Focus line */}
          <Line
            type="monotone"
            dataKey="focus"
            stroke="#16a34a"   // green
            name="Focus Time (mins)"
          />

          {/* Distraction line */}
          <Line
            type="monotone"
            dataKey="distraction"
            stroke="#dc2626"   // red
            name="Distraction Time (mins)"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
