import { useState, useEffect } from "react";
import api from "../api";

export default function StudentDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/api/events").then(res => setEvents(res.data));
  }, []);

  async function register(eventId) {
    try {
      await api.post(`/api/registrations/${eventId}`);
      alert("Registered!");
    } catch (err) {
      alert("Already registered or error occurred.");
    }
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <h2>Available Events</h2>

      {events.map(ev => (
        <div key={ev._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{ev.title}</h3>
          <p>{ev.description}</p>
          <p>{ev.date} {ev.time}</p>
          <p>{ev.venue}</p>
          <button onClick={() => register(ev._id)}>Register</button>
        </div>
      ))}
    </div>
  );
}
