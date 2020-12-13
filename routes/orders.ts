import { Router } from "express";
import { validateRequest } from "../middlewares/validate-request";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
import * as orders from "../controllers/orders";
import { createOrderValidation } from "../validation/order";

const router = Router();
router
  .route("/")
  .post(createOrderValidation, validateRequest, orders.createOrder);

router.route("/").get(currentUser, requireAuth, isAdmin, orders.getOrders);
router.route("/:id").get(currentUser, requireAuth, isAdmin, orders.getOrder);
router.route("/:id/pay").put(orders.updateOrderToPaid);

export { router as orderRouter };
