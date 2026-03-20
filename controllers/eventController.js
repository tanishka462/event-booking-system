const {Event} = require('../models');
const {validationResult} =require('express-validator');
exports.getEvents = async(req,res)=>{
const events =await Event.findAll();
res.json(events);
};
exports.createEvent =async(req,res,next)=>{
try{
const errors =validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({
errors:errors.array()
});
}
const {title,description,date,total_capacity}= req.body;
const event =await Event.create({
title,
description,
date,
total_capacity,
remaining_tickets:
total_capacity
});
res.json(event);
}
catch(error){
next(error);
}
};