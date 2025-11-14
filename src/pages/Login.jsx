import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

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
      alert("Invalid credentials");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin} style={{ maxWidth: "300px" }}>
        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        /><br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        /><br/><br/>

        <button>Login</button>
      </form>

      <p style={{ marginTop: 20 }}>
        Not registered? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
}

