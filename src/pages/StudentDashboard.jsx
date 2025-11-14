import { useEffect, useState } from "react";
import api from "../api";

export default function StudentDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/api/events").then(res => setEvents(res.data));
  }, []);

  async function registerEvent(id) {
    try {
      await api.post(`/api/registrations/${id}`);
      alert("Registered successfully!");
    } catch {
      alert("You may already be registered.");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Dashboard</h1>

      {events.map(ev => (
        <div key={ev._id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <h3>{ev.title}</h3>
          <p>{ev.description}</p>
          <p>{ev.date} — {ev.time}</p>
          <p>{ev.venue}</p>
          <button onClick={() => registerEvent(ev._id)}>Register</button>
        </div>
      ))}
    </div>
  );
}
