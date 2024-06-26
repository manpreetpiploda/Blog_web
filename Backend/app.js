import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());

app.use(express.urlencoded({extended: true, limit:"16kb"}))

app.use(cookieParser());

import userRoutes from "./src/routes/user.router.js";
import profileRoutes from "./src/routes/profile.router.js";
import postRoutes from "./src/routes/post.router.js";


app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/post", postRoutes);


export { app };