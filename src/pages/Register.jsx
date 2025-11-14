import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/api/auth/register", form);
      alert("Registered successfully! Please log in.");
      navigate("/");
    } catch (err) {
      alert("Registration failed. Email may already exist.");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>

      <form onSubmit={handleRegister} style={{ maxWidth: "300px" }}>
        <input name="name" placeholder="Name" onChange={handleInput} required /><br/><br/>
        <input name="email" type="email" placeholder="Email" onChange={handleInput} required /><br/><br/>
        <input name="password" type="password" placeholder="Password" onChange={handleInput} required /><br/><br/>

        <label>Role:</label>
        <select name="role" onChange={handleInput}>
          <option value="student">Student</option>
          <option value="organiser">Organiser</option>
        </select><br/><br/>

        <button>Register</button>
      </form>

      <p style={{ marginTop: 20 }}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
