import { Router } from "express";
// import { validateRequest } from "../middlewares/validate-request";
import { currentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";
import { isAdmin } from "../middlewares/is-admin";
import { createOrder } from "../controllers/orders";

const router = Router();
router.route("/").post(currentUser, requireAuth, isAdmin, createOrder);

export { router as orderRouter };
