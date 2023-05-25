const express = require('express')
const router = express.Router();


const {logIn,auth} = require('../Controller/logIn')
const {singUp,profile} = require('../Controller/singUp')

// authonticaton

router.post('/login',logIn)
router.post('/singup',singUp)
router.get('/profile',auth ,profile)


module.exports = router;