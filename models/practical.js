import mongoose from "mongoose";
const practicalschema=new mongoose.Schema({
    SubjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject", 
        required:true
    }, Title:{
        type:String,
        required:true
    }, 
    Description:{
        type:String,
        required:true
    },createdBy:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"Subject",  
        required:true  
    },Enrolledstudents:[{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"user",  
        required:true  
    }]
})

const Practicalschema=mongoose.model("Practical",practicalschema)
export default Practicalschema;