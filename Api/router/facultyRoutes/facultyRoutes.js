const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"faculty get request."
    })
});

router.get('/name',(req,res,next)=>{
    res.status(200).json({
        mesage:"My name is Amit Sharma."
    })
})
module.exports=router;
