import { useState } from "react";
import api from "../services/api";
import Card from "./ui/Card";

export default function ActivityForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    category: "DeepWork",
    startTime: "",
    endTime: "",
    date: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  if (
    !form.title ||
    !form.startTime ||
    !form.endTime ||
    !form.date
  ) {
    alert("Please fill all fields");
    return;
  }

    try {
      await api.post("/activities", form);
      onAdd();
      setForm({
        title: "",
        category: "DeepWork",
        startTime: "",
        endTime: "",
        date: "",
      });
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <Card className="mb-6">
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        name="title"
        placeholder="Activity title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full p-2 border"
      >
        <option>DeepWork</option>
        <option>Learning</option>
        <option>Distraction</option>
        <option>Rest</option>
      </select>

      <input
        type="datetime-local"
        name="startTime"
        value={form.startTime}
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <input
        type="datetime-local"
        name="endTime"
        value={form.endTime}
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 border"
      />

      <button className="w-full bg-black text-white p-2">
        Add Activity
      </button>
    </form>
    </Card>
  );
}
