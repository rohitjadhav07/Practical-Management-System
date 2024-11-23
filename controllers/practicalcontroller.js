import Practicalschema from "../models/practical.js";
export const createPractical=async(req,res)=>{
    try {
        const { subjectId, title, description,createdBy } = req.body;
        const practical = new Practicalschema({
            SubjectId: subjectId,
            Title: title,
            Description: description,
            createdBy:createdBy
        })
        const savedPractical = await practical.save();
        res.json({savedPractical});
    } catch (error) {
        res.json("error...");
    }
    
}
export const enrollStudent = async (req, res) => {
    try {
       
        const { practicalId, StudentId } = req.body;

        
        if (!practicalId || !StudentId) {
            return res.status(400).json({ error: "Practical ID and Student ID are required." });
        }

      
        const practical = await Practicalschema.findById(practicalId);

        if (!practical) {
            return res.status(404).json({ error: "Practical not found." });
        }

       
        if (practical.Enrolledstudents.includes(StudentId)) {
            return res.status(400).json({ error: "Student already enrolled." });
        }

        practical.Enrolledstudents.push(StudentId);

       
        await practical.save();

      
        res.status(200).json({ message: "Student enrolled successfully.", practical });
    } catch (error) {
       
        console.error("Error enrolling student:", error);
        res.status(500).json({ error: "An error occurred while enrolling the student." });
    }
};