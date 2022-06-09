const express=require('express');
const app=express();

const facultyRouter=require('./Api/router/facultyRoutes/facultyRoutes');
const studentRouter=require('./Api/router/studentRoutes/studentRoutes');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:3000')
app.use('/faculty',facultyRouter);
app.use('/student',studentRouter);

// app.use('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"App is runing."
//     })
// });

//Error handing

app.use((req,res,next)=>{
    res.status(404).json({
        message:"Bad request."
    })
})

module.exports=app;