import { useEffect } from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import api from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  const fetchActivities = async function() {
    const res = await api.get(`/activities/day?date=${today}`);
    setActivities(res.data);
  };

  useEffect(function() {
    fetchActivities();
  },[]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="p-6">
      <h1>Dashboard Page</h1> 
      <h1 className="text-2xl">Dashboard</h1>
      <p>You are logged in.</p>
      

       <div className="max-w-xl mx-auto p-6"></div>
      <h1 className="text-2xl mb-4">Today’s Activities</h1>
      <ActivityForm onAdd={fetchActivities} />
      <ActivityList activities={activities} />
    </div>
  );
}