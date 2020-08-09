const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
// const mysql = require("mysql");
// const dotenv = require('dotenv');
const port = process.env.PORT  || 3000


app.use(bodyParser.json())
app.use(cors());
app.use(
    bodyParser.urlencoded({extended:false})
)

// const employees = require("./routes/employees")
// app.use("/employees",employees)

const Users = require("./routes/Users")
app.use("/users",Users)

// dotenv.config({path: './.env'})

    // const db = mysql.createConnection({
    //     host: process.env.DATABASE_HOST,
    //     user: process.env.DATABASE_USER,
    //     password: process.env.DATABASE_PASSWORD,
    //     database: process.env.DATABASE
    // })
    // db.connect( (error)=>{
    //     if(error){
    //         console.log(error);
    //     }
    //         else{
    //         console.log("MySQL Connected");    
    //     }
    //     })


    // app.get('/employeeDetails',(res,req)=>{
    //     mysqlConnection.query('SELECT * FROM employeeDetails WHERE 1',(err,rows,fields)=>{
    //         if(!err){
    //         console.log(rows);
    //        // console.log(rows[0].empID);
    //         }
    //         else{
    //         console.log(err);
    //         }
    //     })
    // });

app.listen(port,() => {
    console.log("server started on post " +port);
    });




