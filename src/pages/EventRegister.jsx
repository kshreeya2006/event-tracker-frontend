import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function EventRegister() {
  const { id } = useParams();
  const [form, setForm] = useState({
    eventId: id,
    studentName: "",
    studentEmail: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await API.post("/api/registrations", form);
    alert("Registered!");
  }

  return (
    <div>
      <h2>Register For Event</h2>

      <form onSubmit={handleSubmit}>
        <input name="studentName" placeholder="Name" onChange={handleChange} /><br/>
        <input name="studentEmail" placeholder="Email" onChange={handleChange} /><br/>

        <button>Register</button>
      </form>
    </div>
  );
}
