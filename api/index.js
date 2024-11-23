import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";

import router from "../routes/feedbackRoutes.js";

const app = express();

const PORT = 3000||process.env.PORT;
app.use(express.json());
app.use("/api/v1",router) 
dotenv.config()

app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})
dbConnect();

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})
