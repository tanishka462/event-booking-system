const {Event,Booking,Attendance} = require('../models');
const {validationResult} = require('express-validator');
exports.getEvents = async(req,res)=>{
const events = await Event.findAll();
res.json(events);
};
exports.createEvent = async(req,res,next)=>{
try{
const errors = validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({
errors:errors.array()
});
}
const {title,description,date,total_capacity} = req.body;
const event = await Event.create({
title,
description,
date,
total_capacity,
remaining_tickets:total_capacity
});
res.json(event);
}
catch(error){
next(error);
}
};
exports.markAttendance = async(req,res,next)=>{
try{
const eventId = req.params.id;
const {booking_code} = req.body;
const booking = await Booking.findOne({
where:{
booking_code,
EventId:eventId
}
});
if(!booking){
return res.status(404).json({
message:"Invalid booking code"
});
}
const existing = await Attendance.findOne({
where:{
UserId:booking.UserId,
EventId:eventId
}
});
if(existing){
return res.json({
message:"Already entered"
});
}
await Attendance.create({
UserId:booking.UserId,
EventId:eventId
});
const totalBookings =
await Booking.count({
where:{EventId:eventId}
});
res.json({
message:"Attendance marked",
total_tickets_booked:totalBookings
});
}
catch(error){
next(error);
}
};