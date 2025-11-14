import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "student") navigate("/student");
      else navigate("/organiser");
    } catch (err) {
      alert("Invalid login");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password"
               onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button>Login</button>
        <p>
            Don’t have an account? <Link to="/register">Register here</Link>
        </p>

      </form>
    </div>
  );
}
