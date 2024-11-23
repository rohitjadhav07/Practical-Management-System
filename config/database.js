import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const dbConnect = async () => {
    try {
        // Use the MongoDB URL from environment variables
        const mongodbUrl = process.env.MONGODB_URL;
        console.log("MONGODB_URL from env:", process.env.MONGODB_URL);

        if (!mongodbUrl) {
            throw new Error("MongoDB URL is not defined in environment variables.");
        }

        // Connect to the database
        await mongoose.connect(mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default dbConnect;
