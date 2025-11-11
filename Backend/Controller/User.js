import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Model/UserModel.js"
import { count } from "console";

export const webToken = async (_id) => {
    const secret = process.env.JWT_KEY;
    return jwt.sign({ _id }, secret, { expiresIn: "1d" });
};

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     return res.status(400).json({ message: "Please enter a valid email" });
        // }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        const token = await webToken(user._id);

        res.status(200).json({
            message: "User Registered Successfully",
            user: { id: user._id, name, email },
            // token,
        });

        console.log("User registered:", user);
    } catch (error) {
        console.error("Something went wrong:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({
            email
        }).select("+password");
        if (!user) {
            res.status(400).json({ message: "Invalid email or password" })
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword && !user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = await webToken(user._id);

        if (user && isPassword) {
            res.status(200).json({
                message: "Login Sucessfully",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token
            })
        }


    } catch (error) {
        console.error("Something went wrong ", error)
        res.status(500).json({ message: "Server Error", error })
    }
}


export const getUsers = async (req, res) => {
    const userId = req.params.id
    console.log("userId", userId)
    try {
        const users = await User.findById(userId).select("-password")
        res.status(200).json(users)
    } catch (error) {
        console.error("Something went wrong ", error)
        res.status(500).json({ message: "Server Error ", error })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        res.status(200).json({ message: "User feteched Sucessfully ", users, count: users.length })

    } catch (error) {
        console.error("Something went wrong", error)
        res.status(500).json({ message: "Server Error", error })
    }
}