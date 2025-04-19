const Event = require('../models/Event');
const Registration = require('../models/Registration');
const AuditLog = require('../audit-log/log');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, organizerId } = req.body;
    const event = await Event.create({ title, description, date, organizerId });
    AuditLog('CREATE_EVENT', null, organizerId);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
};

exports.registerForEvent = async (req, res) => {
  const { userId, eventId } = req.body;
  const reg = await Registration.create({ userId, eventId });
  AuditLog('REGISTER_EVENT', userId, null);
  res.status(201).json(reg);
};

exports.unregisterEvent = async (req, res) => {
  const { userId, eventId } = req.body;
  await Registration.destroy({ where: { userId, eventId } });
  AuditLog('UNREGISTER_EVENT', userId, null);
  res.json({ message: 'Unregistered' });
};

exports.getEngagementScore = async (req, res) => {
  const eventId = req.params.eventId;
  const regs = await Registration.findAll({ where: { eventId } });
  const regCount = regs.length;
  const attended = regs.filter(r => r.attended).length;
  const feedback = Math.round(Math.random());
  const responsive = Math.round(Math.random());
  const score = Math.min(2, regCount / 5) + Math.min(2, attended / 5) + feedback + responsive;
  res.json({ engagementScore: score });
};
