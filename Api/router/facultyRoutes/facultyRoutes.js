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



module.exports = router;
