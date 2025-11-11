import express from "express"
import { getAllUsers, getUsers, Login, Register } from "../Controller/User.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/getUser/:id", getUsers);
router.get("/allUsers", getAllUsers)

export default router;
