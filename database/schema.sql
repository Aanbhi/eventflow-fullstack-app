
-- Run this if you're initializing the DB manually
CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE Events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  date TIMESTAMP,
  organizerId INTEGER
);

CREATE TABLE Registrations (
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  eventId INTEGER,
  attended BOOLEAN DEFAULT FALSE
);

CREATE TABLE Audits (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  action TEXT,
  userEmail TEXT,
  organizerId INTEGER
);
