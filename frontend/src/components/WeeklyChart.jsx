import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function WeeklyChart({ data }) {
  if (!data.length) return null;

  return (
    <div className="border p-4">
      <h2 className="text-xl mb-2">Weekly Focus Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="focus" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
