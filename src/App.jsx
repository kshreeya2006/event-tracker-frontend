import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import OrganiserDashboard from "./pages/OrganiserDashboard";
import EventParticipants from "./pages/EventParticipants";
//import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/organiser" element={<OrganiserDashboard />} />
        <Route path="/organiser/event/:id" element={<EventParticipants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
