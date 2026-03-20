const express=require('express');
const router=express.Router();
const controller=require('../controllers/bookingController');
const {body} =require('express-validator');
router.post('/',body('user_id').isInt(),
body('event_id').isInt(),
controller.createBooking
);
module.exports=router;