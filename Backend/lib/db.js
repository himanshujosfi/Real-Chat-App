
// const mongoose = require("mongoose");
import mongoose from "mongoose"

const connectDB = async () => {
    const dbUrl = process?.env.DATABASE
    try {
        await mongoose.connect(dbUrl,
            //      {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            // }
        );
        console.log(" MongoDB Atlas Connected...");
    } catch (err) {
        console.error(" Something went wrong:");
    }
};

export default connectDB;

