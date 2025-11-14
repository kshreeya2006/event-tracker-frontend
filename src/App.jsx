import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import OrganiserDashboard from "./pages/OrganiserDashboard";
import EventParticipants from "./pages/EventParticipants";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student */}
        <Route path="/student" element={<StudentDashboard />} />

        {/* Organiser */}
        <Route path="/organiser" element={<OrganiserDashboard />} />
        <Route path="/organiser/event/:id" element={<EventParticipants />} />
      </Routes>
    </BrowserRouter>
  );
}
