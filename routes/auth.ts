import { Router } from "express";
import { login, register, getCurrentUser, signout } from "../controllers/auth";
import { validateRequest } from "../middlewares/validate-request";
import { currentUser } from "../middlewares/current-user";
import { loginValidation, registerValidation } from "../validation/auth";

const router = Router();
router.route("/currentUser").get(currentUser, getCurrentUser);
router.route("/login").post(loginValidation, validateRequest, login);
router.route("/register").post(registerValidation, validateRequest, register);
router.route("/signout").post(signout);

export { router as authRouter };
