import { signup, login, sendotp} from '../controllers/auth.controller.js'

import { Router } from 'express';
const router = Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/sendotp", sendotp);

export default router;