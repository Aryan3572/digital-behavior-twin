import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import DailyInsights from "../components/DailyInsights";
import WeeklyChart from "../components/WeeklyChart";
import api from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [activities, setActivities] = useState([]);
  const [dailyInsights, setDailyInsights] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);


  const today = new Date().toISOString().split("T")[0];
  const start = new Date(Date.now() - 6 * 86400000).toISOString().split("T")[0];

  const fetchData = async () => {
    try {
      const [act, daily, weekly] = await Promise.all([
        api.get(`/activities/day?date=${today}`),
        api.get(`/insights/day?date=${today}`),
        api.get(`/insights/week?start=${start}&end=${today}`),
      ]);

        setLoading(true);
        try {
          // existing logic
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
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
    }
  };

  // 🔐 Auth check FIRST
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
    <div className="p-6">

      <h1 className="text-2xl mb-4">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
    </button>

      <DailyInsights insights={dailyInsights} />
      <ActivityForm onAdd={fetchData} />
      <ActivityList activities={activities} />

      <WeeklyChart data={weeklyData} />

    </div>
  );
}
