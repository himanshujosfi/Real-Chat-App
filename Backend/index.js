
import "dotenv/config.js"

import express from "express";
import cors from "cors";
import userRoutes from "./Router/User.js"
import connectDB from "./lib/db.js"

const app = express()

connectDB()
const port = process.env.PORT ?? 6000

app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
))

app.listen(port, (req, res) => {
    console.log("server is running on port 8000")
})

app.use(express.json())
app.use("/v1", userRoutes)

app.get('/', (req, res) => {
    res.send("hellow world")
})

