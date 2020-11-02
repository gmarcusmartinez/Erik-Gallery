import { Router } from "express";
import { getCurrentUser } from "../controllers/auth";

const router = Router();
router.route("/currentUser").get(getCurrentUser);

export { router as authRouter };
