import express from "express"
import { createUser,getAllUsers,getAllStudents,getAllTeachers,getAllAdmins } from "../controllers/usercontroller.js";
import { createSubject, getAllSubjects } from "../controllers/subjectcontroller.js";
import { createPractical, enrollStudent } from "../controllers/practicalcontroller.js";
import { isAdmin, isAuthorized,isTeacher,isStudent } from "../middleware/middleware.js";
const router=express.Router();



router.post("/users/create",createUser);
router.get("/users/get",isAuthorized('Admin'),getAllUsers);
router.get("/teachers/get",isAuthorized('Admin'),getAllTeachers);
router.get("/students/get",isAuthorized('Admin','Teacher'),getAllStudents);
router.get("/admins/get",isAuthorized('Admin'),getAllAdmins);

router.post("/subject/create",isAdmin,createSubject);
router.get("/subjects/get",getAllSubjects);

router.post("/practical/create",isTeacher,createPractical)
router.post("/practical/enroll",isStudent,enrollStudent)


export default router;