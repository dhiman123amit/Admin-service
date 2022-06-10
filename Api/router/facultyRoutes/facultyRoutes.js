const express = require('express');
const router = express.Router();
const Student = require('../model/facultySchema');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "faculty get request."
    })
});

router.get('/name', (req, res, next) => {
    res.status(200).json({
        mesage: "My name is Amit Sharma."
    })
});

router.post('/', (req, res, next) => {
    // res.status(200).json({
    //     message:"Post request."
    // })
    // console.log('value',req.body);

    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
    });

    student.save().then(result => {
        console.log(result);
        res.status(200).json({
            newFaculty: result
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })

});

router.get('/facultyList', (req, res, next) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                facultyList: result
            })
        })
        .catch(err => {
            console.log('err', err);
            res.status(500).json({
                err: err
            })
        })
});

// find single faculty data

router.get('/:id',(req,res,next)=>{
 Student.findById(req.params.id)
 .then(result=>{

    res.status(200).json({
        singleFacultyData:result,
        message:"Facul;ty data"
    });
 }).catch(err=>{
     res.status(500).json({
         err:err
     })
 })
});

// Delete faculty 

 router.delete('/:id',(req,res,next)=>[
    

     Student.remove({_id:req.params.id}).then(result=>{

        res.status(200).json({
            message:"Faculty deleted",
            result:result
        })
     }).catch(err=>{
         res.status(500).json({
             error:"Somthing is wrong.",
             err:err
         })
     })
 ])



module.exports = router;
