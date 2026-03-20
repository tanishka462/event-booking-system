const {Booking,Attendance} = require('../models');
exports.markAttendance = async(req,res)=>{
try{
    const {booking_code} = req.body;
    const booking =await Booking.findOne({
    where:{booking_code}
});
if(!booking){
    return res.status(404).json({message:"Invalid booking code"
});
}
await Attendance.create({
    UserId:booking.UserId,
    EventId:booking.EventId
});
res.json({message:"Entry allowed"});
}
catch(error){
    res.status(500).json({error:error.message});
}
};