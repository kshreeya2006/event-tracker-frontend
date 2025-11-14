import { useState } from "react";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");

  async function handleLogin() {
    const res = await API.get("/api/users?email=" + email);
    if (res.data.length > 0) alert("Login success!");
    else alert("User not found");
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
