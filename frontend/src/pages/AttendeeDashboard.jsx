import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AttendeeDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Available Events</h2>
      {events.map((event) => (
        <div key={event.id} className="border p-4 mb-2">
          <h3 className="font-bold">{event.title}</h3>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
}
