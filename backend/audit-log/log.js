const Audit = require('../models/Audit');

module.exports = async function (action, userEmail, organizerId) {
  await Audit.create({
    action,
    userEmail,
    organizerId,
  });
};