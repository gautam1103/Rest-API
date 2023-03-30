const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');
const Student = require('./model/student');

// GET Request for my API
router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     msg:'this is student GET request'
    // })

    Student.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});

// POST Request for my API


// router.post('/',(req,res,next)=>{
//     res.status(200).json({
//         msg:'this is student POST request'
//     })
// })

router.post('/',(req,res,next)=>{

    // send values to database
    
    const student = new Student({
        _id:new mongoose.Types.ObjectId,
        name : req.body.name,
        regno : req.body.regno,
        college: req.body.college,
        stream: req.body.stream
    });
    student.save().then(result=>{
        console.log(result);
        res.status(200).json({
            newStudent : result
        })
    })

    .catch(err=>{
        console.log(res);
        res.status(500).json({
            error:err
        })
    })
})

// GET element by ID

router.get('/:id',(req,res,next)=>{

    console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student:result
        })
    })
    
    .catch(err=>{
        console.log(res);
        res.status(500).json({
            error:err
        })
    })
})

// DELETE command

router.delete('/:id',(req,res,next)=>{
    
    Student.findByIdAndRemove({_id:req.params.id}).then(result=>{
        res.status(200).json({
            message:'Student details deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

// PUT command
router.put('/:id',(req,res,next)=>{
    
    Student.findOneAndUpdate({_id:req.params.id},{

        $set:{
            name : req.body.name,
            regno : req.body.regno,
            college: req.body.college,
            stream: req.body.stream
        }
    })  
        .then(result=>{
        res.status(200).json({
            message:'Student details updated',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})



module.exports = router;