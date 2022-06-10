const mongoose=require('mongoose');

const facultySchema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    first_name:String,
    last_name:String,
    email:String,
    phone:Number,
    role:String
});

module.exports=mongoose.model('faculty',facultySchema)