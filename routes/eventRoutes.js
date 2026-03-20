const express = require('express');
const router = express.Router();
const controller =require('../controllers/eventController');
const {body} =require('express-validator');
router.get('/',controller.getEvents);
router.post('/',body('title').notEmpty(),
body('date').notEmpty(),
body('total_capacity').isInt(),
controller.createEvent
);
module.exports = router;