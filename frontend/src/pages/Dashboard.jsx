import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import DailyInsights from "../components/DailyInsights";
import WeeklyChart from "../components/WeeklyChart";
import api from "../services/api";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/ui/Card";
import MetricTitle from "../components/dashboard/MetricTitle";

export default function Dashboard() {
  const navigate = useNavigate();

  const [activities, setActivities] = useState([]);
  const [dailyInsights, setDailyInsights] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];
  const start = new Date(Date.now() - 6 * 86400000)
    .toISOString()
    .split("T")[0];

  const fetchData = async () => {
    setLoading(true);
    try {
      const [act, daily, weekly] = await Promise.all([
        api.get(`/activities/day?date=${today}`),
        api.get(`/insights/day?date=${today}`),
        api.get(`/insights/week?start=${start}&end=${today}`),
      ]);

      setActivities(act.data);
      setDailyInsights(daily.data);

      const formatted = Object.entries(weekly.data).map(
        ([day, val]) => ({
          day,
          focus: val.focus,
          distraction: val.distraction,
        })
      );

      setWeeklyData(formatted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6 p-6">
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">
              Dashboard
            </h1>

            <button
              onClick={handleLogout}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricTitle
            label="Focus Time"
            value={Math.round(dailyInsights?.focusTime || 0)}
          />

          <MetricTitle
            label="Distraction Time"
            value={Math.round(dailyInsights?.distractionTime || 0)}
          />

          <MetricTitle
            label="Longest Session"
            value={Math.round(dailyInsights?.longestFocusSession || 0)}
          />

          <MetricTitle
            label="Sessions"
            value={activities.length}
            unit=""
          />
        </div>

         
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* LEFT */}
            <Card>
              <ActivityForm onAdd={fetchData} />
            </Card>

            {/* RIGHT */}
            <Card>
              <ActivityList activities={activities} />
            </Card>

          </div>

          <Card className="mt-6">
            <WeeklyChart data={weeklyData} />
          </Card>
        </Card>
      </div>
    </AppLayout>
  );
}
  