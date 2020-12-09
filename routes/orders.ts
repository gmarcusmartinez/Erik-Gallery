import { Router } from "express";
import { validateRequest } from "../middlewares/validate-request";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";

import { createOrder, getOrder } from "../controllers/orders";
import { createOrderValidation } from "../validation/order";

const router = Router();
router.route("/").post(createOrderValidation, validateRequest, createOrder);
router.route("/:id").get(currentUser, requireAuth, isAdmin, getOrder);

export { router as orderRouter };
