const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    console.log(moment().format('MMMM Do YYYY dddd, h:mm:ss a'),",",req.ip,",",req.path);//::1
    next()
})
 mongoose.connect("mongodb+srv://Vinit12:Vinit123@cluster0.hjamr.mongodb.net/Vinit12-DB", {
     useNewUrlParser: true
 })
 .then( () => console.log("MongoDb is connected"))
 .catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});