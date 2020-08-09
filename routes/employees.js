const express = require("express")
const router =express.Router();
const cors = require("cors")
const jwt = require("bcrypt")

const employee = require("../models/employee")
router.use(cors())

process.env.SECRET_KEY = "secret"

//Add employee 
router.post('./add',(req,res)=>{
    const employeeDetails ={
        empfirstname: req.body.empfirstname,
        emplastname: req.body.emplastname,
        empaddress: req.body.empaddress,
        empdob: req.body.empdob,
        empmobileno: req.body.empmobileno,
        empcity: req.body.empcity,
    }
    // employee.findOne({
    //    where: {
    //     empId: req.body.empId
    //    } 
    // })
    // .then(user =>{
    //     if(!user){
    //         const hash = bcrypt.hashSync(userData.password,10)
    //         userData.password =hash
    //         user.create(userData)
    //         .then(user =>{
    //             let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{ 
    //                 expiresIn:1440
    //             })
    //             res.json({token:token})
    //         })
    //         .catch(err =>{
    //             res.send('error:'+error)
    //         })
    //     }else{
    //         res.json({error:'user already exists'})
    //     }
    // })
})
module.exports=router;