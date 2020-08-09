const express = require("express")
const users = express.Router();
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = "secret"

//Register 
users.post('/register',(req,res)=>{
    const userData ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        dob: req.body.dob,
        company: req.body.company,
    }
    User.findOne({
       where: {
        email: req.body.email
       } 
    })
    .then(user =>{
        if(!user){
            const hash = bcrypt.hashSync(userData.password,10)
            userData.password =hash
            User.create(userData)
            .then(user =>{
                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{ 
                    expiresIn:1440
                })
                res.json({token:token})
            })
            .catch(err =>{
                res.send('error:'+error)
            })
        }else{
            res.json({error:'user already exists'})
        }
    })
    .catch(err =>{
        res.send('error:' + err)
    })
})

//Login
users.post('/login',(req,res) =>{
    User.findOne({
        where: {
        email: req.body.email
        }
    })
    .then(user => {
        if(bcrypt.compareSync(req.body.password,user.password)){
            let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                expiresIn:1440
            })
            res.json({ token:token })
        }else{
            res.send('user does not exist')
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

//employee
users.get("/employee",(req,res) =>{
    const decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

    User.findOne({
        where:{
            id: decoded.id
        }
    })
    .then(user => {
        if(user){
            res.json(user)
        }else{
            res.send('user does not exit')
        }
    })
    .catch(err =>{
        res.send('error :'+ err)
    })
})


module.exports= users;