const mongoose = require('mongoose')
require('dotenv').config();


const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser:true,
        useUnifiedTopology: true,})
        .then(()=>{ console.log('Connected To DB')})
        .catch((error)=>{
            console.log(error.massage)
        process.exit(1);
    })
}





module.exports = dbconnect
