import React, { useState } from "react";
import axios from "axios";

export default function OrganizerDashboard() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const createEvent = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/events/create",
      { title, date, description },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("Event Created!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Create Event</h2>
      <input className="border p-2 mb-2 block" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input className="border p-2 mb-2 block" placeholder="Date" type="date" onChange={(e) => setDate(e.target.value)} />
      <textarea className="border p-2 mb-2 block" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button className="bg-green-500 text-white px-4 py-2" onClick={createEvent}>Create</button>
    </div>
  );
}
