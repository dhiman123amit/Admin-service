const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser=require('body-parser');
const facultyRouter = require('./Api/router/facultyRoutes/facultyRoutes');
const studentRouter = require('./Api/router/studentRoutes/studentRoutes');

mongoose.connect('mongodb+srv://amit123:Amit123@collagedb.jjkssin.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('error', err => {
    console.log('err');
});
mongoose.connection.on('connected', connected => {
    console.log('Conectes');
});

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json())
app.use('/faculty', facultyRouter);
app.use('/student', studentRouter);

// app.use('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"App is runing."
//     }) 
// });

//Error handing

app.use((req, res, next) => {
    res.status(404).json({
        message: "Bad request."
    })
})

module.exports = app;