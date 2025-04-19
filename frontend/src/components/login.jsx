// File: frontend/src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.includes("organizer")) navigate("/organizer");
    else navigate("/attendee");
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
