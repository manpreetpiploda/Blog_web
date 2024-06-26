import {
    updateProfile,
    deleteAccount,
} from "../controllers/profile.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

import { Router } from "express";
const router = Router();

router.post("/updateProfile", auth, updateProfile);
router.post("/deleteAccount", auth, deleteAccount);


export default router;
