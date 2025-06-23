const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');

router.post('/set-reminder', reminderController.setReminder);

module.exports = router;
