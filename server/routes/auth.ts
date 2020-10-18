import { Router } from "express";
import { login, register } from "../controllers/auth";
import { validateRequest } from "../middlewares/validate-request";
import { loginValidation, registerValidation } from "../validation/auth";

const router = Router();

router.route("/login").post(loginValidation, validateRequest, login);
router.route("/register").post(registerValidation, validateRequest, register);
export { router as authRouter };
