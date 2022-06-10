const mongoose=require('mongoose');

const schemaOfFaculty=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    gender:String,
    phone:Number
});

module.exports=mongoose.model('student',schemaOfFaculty);