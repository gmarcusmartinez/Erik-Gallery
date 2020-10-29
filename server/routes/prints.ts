import { Router } from "express";
import { createPrint, getPrints } from "../controllers/prints";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";

const router = Router();

router.route("/").get(getPrints);
router.route("/").post(currentUser, requireAuth, isAdmin, createPrint);

export { router as printRouter };
