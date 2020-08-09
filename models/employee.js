const Sequelize = require('sequelize')
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'employeeDetails',
    {
        empId :{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true          
        },
        empfirstname:{
            type: Sequelize.STRING,
        },
        emplastname: {
            type: Sequelize.STRING,
        },
        empaddress: {
            type: Sequelize.STRING,
        },
        empdob: {
            type: Sequelize.DATE,
        },
        empmobileno:{
            type: Sequelize.INTEGER, 
        },
        empcity:{
            
            type: Sequelize.STRING, 
        }
    },
        {
            timestamps: false
        }

)