import userModel from "../models/user.js";
export const createUser=async(req,res)=>{
    try {
        const { name, email, pass,role } = req.body;
        const user = new userModel({
            name: name,
            email: email,
            pass: pass,
            role: role
        })
        const savedUser = await user.save();
        res.json({savedUser});
    } catch (error) {
        res.json("error...");
    }
    
}
export const getAllUsers=async(req,res)=>{
    try {
      const getUsers=  await userModel.find();
      res.json({getUsers});
    } catch (error) {

        res.json({error:"Cannot fetch data"});
        console.log(error);
    }
}
// Get all teachers
export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await userModel.find({ role: "Teacher" });
        res.json({ teachers });
    } catch (error) {
        res.status(500).json({ error: "Cannot fetch teachers" });
        console.error(error);
    }
};

// Get all students
export const getAllAdmins= async (req, res) => {
    try {
        const admins = await userModel.find({ role: "Admin" });
        res.json({ admins });
    } catch (error) {
        res.status(500).json({ error: "Cannot fetch Admins" });
        console.error(error);
    }
};
export const getAllStudents = async (req, res) => {
    try {
        const students = await userModel.find({ role: "Student" });
        res.json({ students });
    } catch (error) {
        res.status(500).json({ error: "Cannot fetch students" });
        console.error(error);
    }
};