import express from "express"
import { getUsers, Login, Register } from "../Controller/User.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/getUser/:id", getUsers);

export default router;
