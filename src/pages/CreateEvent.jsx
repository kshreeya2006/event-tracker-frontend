import { useState } from "react";
import API from "../api";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await API.post("/api/events", form);
    alert("Event Created!");
  }

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br/>
        <input name="description" placeholder="Description" onChange={handleChange} /><br/>
        <input name="date" placeholder="Date" onChange={handleChange} /><br/>
        <input name="time" placeholder="Time" onChange={handleChange} /><br/>
        <input name="venue" placeholder="Venue" onChange={handleChange} /><br/>

        <button>Create</button>
      </form>
    </div>
  );
}
