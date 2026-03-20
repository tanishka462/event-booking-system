const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Booking = sequelize.define('Booking',{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
booking_code:{
    type:DataTypes.STRING,
    unique:true
}
});
module.exports = Booking;