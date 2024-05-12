const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Country = require('../models/country')




router.get('/getdata',async(req,res)=>{
try {

  const data =  await User.find({})
  res.status(200).json(data)
 
} catch (error) {
    console.log(error);
}})





router.post('/signup',async(req,res)=>{
  console.log(req.body);
  try {
      const {Firstname,Lastname,Email,Gender,Dateofbirth,Age}=req.body
 
      const data =  new User({
        Firstname,Lastname,Email,Gender,Dateofbirth,Age})
    await  data.save() 
      
  } catch (error) {
      console.log(error);
  }
  })







module.exports=router