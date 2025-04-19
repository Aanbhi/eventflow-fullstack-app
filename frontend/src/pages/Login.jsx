import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("attendee");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", { email, role });
    localStorage.setItem("token", res.data.token);
    window.location.href = role === "attendee" ? "/attendee" : "/organizer";
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-4">EventFlow Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <select className="border p-2 mb-2" onChange={(e) => setRole(e.target.value)}>
        <option value="attendee">Attendee</option>
        <option value="organizer">Organizer</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
