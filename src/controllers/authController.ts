import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { registerSchema, loginSchema } from "../utils/validation";
import express from 'express';

export const register: express.RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const validation = registerSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ error: "please provide valid username, email, password and fullName" });
            return;
        }

        const { username, email, password, fullName } = req.body;


        // Check if the user already exists with same email or username
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            res.status(400).json({ error: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, email, password: hashedPassword, fullName });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login: express.RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const validation = loginSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ error: "please provide valid email and password" });
            return;
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const searchUser: express.RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email } = req.query;  
        const user = await User.findOne({ $or: [{ username }, { email }] });

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.json({ username: user.username, email: user.email, fullName: user.fullName });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
