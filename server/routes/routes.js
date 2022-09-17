const express = require('express')
const router = express()
const userDataSignIn = require('../models/Userdata')

router.post("/signup", async (req, res) => {
   const signedUpUserData = new userDataSignIn({
    fullName: req.body.fullName,
    userName: req.body.userName,
    userPassword: req.body.userPassword,
    userEmail: req.body.userEmail,  })
  
    try {
    await signedUpUserData.save()
   }
   catch (err) {
    console.log(err)
   }

 
})

module.exports = router