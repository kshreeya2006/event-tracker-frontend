import { useState } from "react";
import API from "../api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await API.post("/api/users", form);
    alert("User Registered!");
  }

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/>
        <select name="role" onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="organiser">Organiser</option>
        </select><br/>

        <button>Register</button>
      </form>
    </div>
  );
}
