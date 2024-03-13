const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.post('/signup',async(req,res)=>{
try {
    const {firstname,email,passcord}=req.body
    const data = await new User({
    firstname,email,passcord})
    data.save() 
    
} catch (error) {
    console.log(error);
}
})

router.get('/user',async(req,res)=>{
try {
    const data =  await User.find()
    if (data.length > 0) {
        res.status(200).json({
          status: "success",
          message: "User data retrieved successfully",
          data: data,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "No users found",
        });
}} catch (error) {
    console.log(error);
}
})












module.exports=router