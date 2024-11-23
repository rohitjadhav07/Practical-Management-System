import mongoose from "mongoose";
const subjectschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, code:{
        type:String,
        required:true
    }, createdBy:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"user",  
        required:true  
    }
})

const Subjectschema=mongoose.model("Subject",subjectschema)
export default Subjectschema;