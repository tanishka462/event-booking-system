const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Attendance = sequelize.define('Attendance',{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
entry_time:{
    type:DataTypes.DATE,
    defaultValue:DataTypes.NOW
}
});
module.exports = Attendance;