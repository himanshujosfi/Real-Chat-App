import mongoose, { Schema } from "mongoose";

// export interface IUser extends Document {
//     name: string;
//     email: string;
//     password: string;
// }

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Please provide a valid email",
            ],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 6,
            select: false, // don’t return password by default
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
