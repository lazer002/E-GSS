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

router.get('/user',(req,res)=>{
    User.find({})
    // res.send({data:data})
})












module.exports=router