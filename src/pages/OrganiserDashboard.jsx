import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

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

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function createEvent(e) {
    e.preventDefault();
    try {
      await api.post("/api/events", form);
      alert("Event created!");
      window.location.reload();
    } catch (err) {
      alert("Only organisers can create events");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Organiser Dashboard</h1>

      <h2>Create Event</h2>
      <form onSubmit={createEvent}>
        <input name="title" placeholder="Title" onChange={handleInput} /><br/><br/>
        <input name="description" placeholder="Description" onChange={handleInput} /><br/><br/>
        <input name="date" placeholder="YYYY-MM-DD" onChange={handleInput} /><br/><br/>
        <input name="time" placeholder="HH:MM" onChange={handleInput} /><br/><br/>
        <input name="venue" placeholder="Venue" onChange={handleInput} /><br/><br/>
        <input name="capacity" placeholder="Capacity" onChange={handleInput} /><br/><br/>
        <button>Create</button>
      </form>

      <h2>My Events</h2>
      {events.map(ev => (
        <div key={ev._id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <h3>{ev.title}</h3>
          <Link to={`/organiser/event/${ev._id}`}>View Participants</Link>
        </div>
      ))}
    </div>
  );
}
