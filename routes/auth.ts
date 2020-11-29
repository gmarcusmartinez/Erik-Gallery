import { Router } from "express";
import { login, register, getCurrentUser, logout } from "../controllers/auth";
import { validateRequest } from "../middlewares/validate-request";
import { currentUser } from "../middlewares/current-user";
import { loginValidation, registerValidation } from "../validation/auth";

const router = Router();
router.route("/currentUser").get(currentUser, getCurrentUser);
router.route("/login").post(loginValidation, validateRequest, login);
router.route("/logout").post(logout);
router.route("/register").post(registerValidation, validateRequest, register);

export { router as authRouter };
