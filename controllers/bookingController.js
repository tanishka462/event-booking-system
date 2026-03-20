const {Booking,Event} = require('../models');
const sequelize = require('../config/database');
const {validationResult} = require('express-validator');
const {v4:uuidv4} = require('uuid');
exports.createBooking = async(req,res,next)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({
errors:errors.array()
});
}
const t = await sequelize.transaction();
try{
    const {user_id,event_id} = req.body;
    const event = await Event.findByPk(event_id,{transaction:t,lock:true}
    );
if(!event){
throw new Error("Event not found");
}
if(event.remaining_tickets <= 0){
throw new Error("Sold out");
}
const code = uuidv4();
await Booking.create(
{
UserId:user_id,
EventId:event_id,
booking_code:code
},
{transaction:t}
);
event.remaining_tickets--;
await event.save({
transaction:t
});
await t.commit();
res.json({
message:"Booked",
booking_code:code
});
}
catch(error){
await t.rollback();
next(error);  
}
};