const express = require('express');
const logger = require('../logger/logger');
const info = require('../util/helper');


const router = express.Router();

router.get('/test-me', function (req, res){

const a = req.query.name
console.log(a)

    res.send({data:a})
   logger.login()
   
   info.printDate()
   info.printMonth()
   info.batchInfo()
   //console.log('date is',info.printDate())
   //console.log('Month is',info.printMonth())
   //console.log('BatchInfo:uranium',info.batchInfo())
    
});




module.exports = router;
// adding this comment for no reason




