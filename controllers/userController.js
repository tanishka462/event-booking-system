const {Booking,Event} =require('../models');
exports.getBookings =async(req,res)=>{
const data =await Booking.findAll({
where:{UserId:req.params.id},
include:[Event]
});
res.json(data);
};