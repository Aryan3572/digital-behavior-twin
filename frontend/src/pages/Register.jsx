import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link} from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
    <h1>Register Page</h1>
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <button className="w-full bg-black text-white p-2">
          Register
        </button>
      </form>

         <p className="mt-4 text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-600 underline">
        Login
      </Link>
    </p>
    </div>
  );
}

