const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Student ger request."
    })
});

router.get('/name',(req,res,next)=>{
    res.status(200).json
    ({
        message:"Student get request Amit Sharma."
    })
});

module.exports=router;