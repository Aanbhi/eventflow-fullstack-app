
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AttendeeDashboard from "./components/AttendeeDashboard";
import OrganizerDashboard from "./components/OrganizerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendee" element={<AttendeeDashboard />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;