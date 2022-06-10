const express = require('express');
const router = express.Router();
const Faculty = require('../model/facultySchema');
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

    const faculty = new Faculty({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
    });

    faculty.save().then(result => {
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
    Faculty.find()
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
    Faculty.findById(req.params.id)
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
    

    Faculty.remove({_id:req.params.id}).then(result=>{

        res.status(200).json({
            message:"Faculty deleted",
            result:result
        })
     }).catch(err=>{
         res.status(500).json({
             error:"Somthing is wrong.",
             err:err
         });
     })
 ]);

 //Updare faculty 

router.put('/update/:id', (req, res, next) => {
    console.log(req.params.id);

    Faculty.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            phone: req.body.phone,
        }
    }).then(result=>{
        res.status(200).json({
            result:result,
            message:"Updated successed"
        });
    }).catch(err=>{
        err:'Somting is wrong';
        err:err
    })

});



module.exports = router;
