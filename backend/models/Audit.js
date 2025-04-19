const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Audit = db.define('Audit', {
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  action: DataTypes.STRING,
  userEmail: DataTypes.STRING,
  organizerId: DataTypes.INTEGER,
});

module.exports = Audit;
