require('dotenv').config();
const express = require('express')
const dbconnect = require('./config/database')
const router = require('./Router/router')
const app = express()
const PORT = process.env.PORT || 5000 ;
app.use(express.json())
dbconnect();
app.use('/',router)

app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})
app.listen(PORT , ()=>{
    console.log(`Connect successfully in ${PORT}`)
})