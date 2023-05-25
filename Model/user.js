const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name :{
        type:String,
        trim : true,
    },
    mobile:{
        type:String,
        trim : true,
    },
    email:{
        type : String,
        trim : true,
    },
    address:{
        type:String,
        trim : true,
    },
    password:{
        type : String,
        
        
    }
});

module.exports = mongoose.model("userN",userSchema)