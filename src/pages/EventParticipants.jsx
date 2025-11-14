import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function EventParticipants() {
  const { id } = useParams();
  const [regs, setRegs] = useState([]);

  useEffect(() => {
    api
      .get(`/api/events/${id}/registrations`)
      .then(res => setRegs(res.data));
  }, [id]);

  async function markAttendance(regId, present) {
    await api.put(`/api/registrations/${regId}/attendance`, {
      isPresent: present
    });
    alert("Updated!");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Participants</h1>

      {regs.map(r => (
        <div key={r._id} style={{ margin: 10 }}>
          <p>{r.name} — {r.email}</p>
          <button onClick={() => markAttendance(r._id, true)}>Present</button>
          <button onClick={() => markAttendance(r._id, false)}>Absent</button>
        </div>
      ))}
    </div>
  );
}
