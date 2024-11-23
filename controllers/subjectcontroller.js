import Subjectschema from "../models/subject.js";
export const createSubject=async(req,res)=>{
    try {
        const { name, code,createdBy} = req.body;
        const subject = new Subjectschema({
            name: name,
            code:code,
            createdBy:createdBy
        })
        const savedsubject = await subject.save();
        res.json({savedsubject});
    } catch (error) {
        res.json(
            {
                "message":error});
    }
    
}
export const getAllSubjects=async(req,res)=>{
    try {
      const getSubjects=  await Subjectschema.find();
      res.json({getSubjects});
    } catch (error) {

        res.json({error:"Cannot fetch data"});
        console.log(error);
    }
}
