const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Event = db.define('Event', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  date: DataTypes.DATE,
  organizerId: DataTypes.INTEGER,
});

module.exports = Event;