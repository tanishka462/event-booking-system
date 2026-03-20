const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Event = sequelize.define('Event',{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
title:{
    type:DataTypes.STRING,
    allowNull:false
},
description:{
    type:DataTypes.TEXT
},
date:{
    type:DataTypes.DATE,
    allowNull:false
},
total_capacity:{
    type:DataTypes.INTEGER,
    allowNull:false
},
remaining_tickets:{
    type:DataTypes.INTEGER,
    allowNull:false
}
});
module.exports = Event;