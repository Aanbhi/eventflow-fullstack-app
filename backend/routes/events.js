const express = require('express');
const router = express.Router();
const {
  createEvent,
  getEvents,
  registerForEvent,
  unregisterEvent,
  getEngagementScore,
} = require('../controllers/eventController');

router.post('/', createEvent);
router.get('/', getEvents);
router.post('/register', registerForEvent);
router.post('/unregister', unregisterEvent);
router.get('/score/:eventId', getEngagementScore);

module.exports = router;