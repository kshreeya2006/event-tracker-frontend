import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function EventParticipants() {
  const { id } = useParams();
  const [regs, setRegs] = useState([]);

  useEffect(() => {
    api.get(`/api/events/${id}/registrations`).then(res => setRegs(res.data));
  }, [id]);

  async function mark(regId, value) {
    await api.put(`/api/registrations/${regId}/attendance`, { isPresent: value });
    alert("Updated");
  }

  return (
    <div>
      <h1>Participants</h1>
      {regs.map(r => (
        <div key={r._id}>
          <p>{r.name} - {r.email}</p>
          <button onClick={() => mark(r._id, true)}>Present</button>
          <button onClick={() => mark(r._id, false)}>Absent</button>
        </div>
      ))}
    </div>
  );
}
