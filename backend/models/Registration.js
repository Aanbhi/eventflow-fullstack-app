const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Registration = db.define('Registration', {
  userId: DataTypes.INTEGER,
  eventId: DataTypes.INTEGER,
  attended: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Registration;
