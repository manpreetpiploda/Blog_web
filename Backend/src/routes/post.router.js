import {
    createPost,
    getAllPostsByUser,
    getAllPosts,
    deletePost
} from "../controllers/post.controller.js";

import { auth } from "../middlewares/auth.middleware.js";


import { Router } from "express";
const router = Router();

router.post("/createPost", auth, createPost);
router.get("/getAllPosts", getAllPosts);
router.get("/getAllPostsByUser", auth, getAllPostsByUser);
router.post("/deletePost", auth, deletePost);


export default router;