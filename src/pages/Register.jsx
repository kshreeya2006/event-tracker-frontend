import { useState } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
//import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/api/auth/register", form);
      alert("Registration successful! Please log in.");
      navigate("/");
    } catch (err) {
      alert("Registration failed. Email may already be used.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Account</h1>

      <form onSubmit={handleRegister} style={{ maxWidth: "300px" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
          required
        />

        <label>Role:</label>
        <select
          name="role"
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="student">Student</option>
          <option value="organiser">Organiser</option>
        </select>

        <button style={{ width: "100%", marginTop: "10px" }}>
          Register
        </button>
      </form>

      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
}
