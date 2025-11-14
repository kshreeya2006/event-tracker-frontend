import { useState, useEffect } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/api/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {events.map((ev) => (
        <div key={ev._id} style={{ margin: 10 }}>
          <b>{ev.title}</b> — {ev.date}
          <br />
          <Link to={`/register-event/${ev._id}`}>Register →</Link>
        </div>
      ))}
    </div>
  );
}
