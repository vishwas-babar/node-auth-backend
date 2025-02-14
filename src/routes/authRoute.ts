import express from "express";
import { register, login, searchUser } from "../controllers/authController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/search", searchUser);

export default router;
