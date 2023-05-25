const User = require("../Model/user")
const Bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// const user = require("../Model/user")
require('dotenv').config()

exports.logIn = async(req,res) =>{
  try
    {const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({success : false , massage : "Please fill all detail."})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({success : false , message : "Email not found"})
    }
    const data = {
        id:user._id,
        email : user.email
    }
    if(await Bcrypt.compare(password,user.password)){
        let token = jwt.sign(data,process.env.JWT_SECRETKEY)
        
        
        // user.token = token;
        user.password = undefined
       
        return res.status(200).json({success:true,massage:"logged in" ,data:user,token:token})
  }
    else{
        return res.status(403).json({success : false , message : "Password not match"})
    }
}catch(error){
    return res.status(500).json({success : false , massage : error.message})
}
}


exports.auth = async(req,res,next) =>{
    try{
        const token = req.header("Authorization")
        // .replace("Bearer ","");
        if(!token){
            return res.status(500).json({success : false , message : "token missing or user not loggedIn"})
        }
        try{
            const payload = jwt.verify(token,process.env.JWT_SECRETKEY)
            req.user = payload

        }catch(err){
            return res.status(500).json({success : false ,msg:err.message, massage :"Token varificatin failed"})
        }
        next();

    }catch(err){
    return res.status(500).json({success : false , massage : err.message})
}
}

