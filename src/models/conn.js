const mongoose =require('mongoose')

const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Pls type valid email']
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
    },
    address:{
        type:String,
        required:true
    }


})

const student =new mongoose.model('student',studentSchema)
module.exports=student