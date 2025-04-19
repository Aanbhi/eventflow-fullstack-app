const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const User = db.define('User', {
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;