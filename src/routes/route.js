const express = require('express');
const moment = require('moment');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

router.get("/test-me", function (req, res) {
    res.send("This is my api 1!")
})
router.get("/test-me2", function (req, res) {
    res.send("This is my api 2!")
})
router.get("/test-me3", function (req, res) {
    res.send("This is my api 3!")
})
router.get("/test-me4", function (req, res) {
    res.send("This is my api 4!")
})
router.get("/test-me5", function (req, res) {
    res.send("This is my api 5!")
})









// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)

// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;