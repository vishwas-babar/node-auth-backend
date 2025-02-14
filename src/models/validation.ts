const { z } = require("zod");

const registerSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string().min(3).max(50),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

module.exports = { registerSchema, loginSchema };
