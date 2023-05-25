const { json } = require("express");
const User = require("../Model/user")
const Bcrypt = require("bcrypt")

exports.singUp = async(req,res) =>{
    try{
        
    const {Name,email,password,mobile,address} = req.body
    if(!Name){
        return res.status(400).json({status:false,msg:"Please Provide Name"})
       }
       if(!(/^[a-zA-Z\s]+$/.test(Name))){
        return res.status(400).json({status:false,msg:"Please Enter Valid Name"})
       }
    
       if(!mobile){
        return res.status(400).json({status:false,msg:"Please Provide Mobile Number"})
       }
    
       if(!(/^[6-9]\d{9}$/.test(mobile))){
        return res.status(400).json({status:false,msg:"Please Enter Valid Mobile Number"})
       }
    
    
       if(!email){
        return res.status(400).json({status:false,msg:"Please Provide email"})
       }
    
       if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))){
        return res.status(400).json({status:false,msg:"Please Enter Valid email"})
       }

       if(!address){
        return res.status(400).json({status:false,msg:"Please Provide Address"})
       }

       if(!(/^[a-zA-Z\s]+$/.test(address))){
        return res.status(400).json({status:false,msg:"Please Enter Valid address"})
       }
    
    const findEmail = await User.findOne({email})
    if(findEmail){
        return res.status(400).json({success:false, massage:"Email already exist" })
    }

    let passwordBecrypt ;
    try{
        passwordBecrypt = await Bcrypt.hash(password,10)
    }catch(err){
        return res.status(400).json({success:false, massage:"Password bycription error"})

    }
    const createUser = await User.create({Name,email,mobile,address,password:passwordBecrypt})
    return res.status(200).json({success:true,massage:"user created successfully",data:createUser})
}
catch(err){
    
    console.log(err.message)
    res.status(500).json({success:false, massage:err.message ,data:"server side error"})
}
}


exports.profile = async(req,res)=>{
    try{
    const email = req.user.email
    let finduser = await User.findOne({email:email}).select({password:0})
    return res.status(200).json({success:true, msg:"Profile Details", data: finduser});
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500).json({success:false, massage:err.message ,data:"server side error"})
    }

}