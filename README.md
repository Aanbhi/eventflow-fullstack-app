# 🎟️ EventFlow – Full Stack Event Management Prototype

A streamlined full-stack application for managing event registrations and interactions between organizers and attendees. Built as part of the **Full Stack Developer Assignment** for EventFlow.

---

## 🚀 Live Demo

- 🔗 Frontend: [https://eventflow-client.vercel.app](#)
- 🔗 Backend API: [https://eventflow-server.onrender.com](#)
- 🧾 API Docs: [https://eventflow-server.onrender.com/api/docs](#)
> Replace with actual deployment URLs once live.

---

## 🛠️ Tech Stack

### Frontend
- React.js (with Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Zustand (for auth state)
- Socket.IO (for optional real-time notifications)

### Backend
- Node.js + Express.js
- PostgreSQL (Supabase or Railway-hosted)
- JWT (Authentication)
- bcrypt.js (Password hashing)
- dotenv (for environment configuration)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Supabase / Railway PostgreSQL

---

## 📌 Features

### Attendee Features
- Mocked email-based login/register
- Browse upcoming events
- Register/Unregister from events
- View their registered events

### Organizer Features
- Mocked login with role-based access
- Create, edit, and delete events
- View attendee list for each event
- View event engagement score

### Additional Features
- Engagement Scoring System:
  - Number of Registrations (0-2 points)
  - Attendance Confirmation Rate (0-2 points)
  - Organizer Responsiveness (0-1 point)
  - Attendee Feedback (mocked) (0-1 point)

- Audit Logging:
  - Tracks actions like login, registration, event creation, etc.

- Security:
  - JWT-based authentication
  - Passwords hashed with bcrypt
  - Sensitive data encrypted

- Real-Time Notifications (Optional):
  - Socket.IO updates on registration/unregistration

---

## 🧾 Database Schema

### Tables

- `attendees(id, email, password_hash)`
- `organizers(id, email, password_hash)`
- `events(id, title, description, date, organizer_id)`
- `registrations(id, event_id, attendee_id, attended)`
- `feedback(id, event_id, attendee_id, score)`
- `audit_logs(id, timestamp, action, actor_email, actor_role)`

> Full schema SQL in `server/db/schema.sql`

---

## 📦 API Endpoints

### Authentication
- `POST /api/login` – mocked login, returns JWT

### Events
- `GET /api/events` – list all events
- `POST /api/events` – create event (organizer only)
- `PUT /api/events/:id` – edit event
- `DELETE /api/events/:id` – delete event

### Registration
- `POST /api/events/:id/register`
- `DELETE /api/events/:id/unregister`

### Organizer Dashboard
- `GET /api/organizer/:id/events` – view all events by organizer
- `GET /api/events/:id/attendees` – view attendee list for an event

### Scoring & Audit
- `GET /api/events/:id/score`
- `GET /api/audit-logs` – all actions (admin/debug)

---

## 🔐 Authentication & Security

- Mocked authentication based on email (for testing/demo)
- JWT tokens for secure access
- bcrypt hashing for passwords
- Basic role-based authorization for routes
- Sensitive information encrypted
- Audit logging for all key actions

---

