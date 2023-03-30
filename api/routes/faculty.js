const express = require('express');
const router = express.Router();

// GET Request for my API
router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is faculties GET request'
    })
})

// POST Request for my API
router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is faculties POST request'
    })
})

module.exports = router;