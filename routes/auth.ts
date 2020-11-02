import { Router } from "express";
import { getCurrentUser, register } from "../controllers/auth";
import { validateRequest } from "../middlewares/validate-request";
import { loginValidation, registerValidation } from "../validation/auth";

const router = Router();
router.route("/currentUser").get(getCurrentUser);
router.route("/register").post(registerValidation, validateRequest, register);

export { router as authRouter };
