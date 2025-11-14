import { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//import { Link, useNavigate } from "react-router-dom";


export default function OrganiserDashboard() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    capacity: ""
  });

  useEffect(() => {
    api.get("/api/events").then(res => setEvents(res.data));
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function createEvent(e) {
    e.preventDefault();
    try {
      await api.post("/api/events", form);
      alert("Created!");
      window.location.reload();
    } catch {
      alert("Not authorised or error");
    }
  }

  return (
    <div>
      <h1>Organiser Dashboard</h1>

      <h2>Create Event</h2>
      <form onSubmit={createEvent}>
        <input name="title" placeholder="Title" onChange={handleChange} /> <br />
        <input name="description" placeholder="Description" onChange={handleChange} /> <br />
        <input name="date" placeholder="YYYY-MM-DD" onChange={handleChange} /> <br />
        <input name="time" placeholder="HH:MM" onChange={handleChange} /> <br />
        <input name="venue" placeholder="Venue" onChange={handleChange} /> <br />
        <input name="capacity" placeholder="Capacity" onChange={handleChange} /> <br />
        <button>Create</button>
      </form>

      <h2>My Events</h2>
      {events.map(ev => (
        <div key={ev._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{ev.title}</h3>
          <Link to={`/organiser/event/${ev._id}`}>View Participants</Link>
        </div>
      ))}
    </div>
  );
}
