const sequelize = require('../config/database');
const User = require('./User');
const Event = require('./Event');
const Booking = require('./Booking');
const Attendance = require('./Attendance');
User.hasMany(Booking);
Booking.belongsTo(User);
Event.hasMany(Booking);
Booking.belongsTo(Event);
User.hasMany(Attendance);
Attendance.belongsTo(User);
Event.hasMany(Attendance);
Attendance.belongsTo(Event);
module.exports = {sequelize,User,Event,Booking,Attendance

};