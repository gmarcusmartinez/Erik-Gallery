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
router
  .route("/:id")
  .put(createOrderValidation, validateRequest, orders.updateOrder);

router.route("/:id/pay").put(orders.updateOrderToPaid);
router.route("/").get(currentUser, requireAuth, isAdmin, orders.adminGetOrders);
router.route("/:id").get(currentUser, requireAuth, isAdmin, orders.getOrder);

export { router as orderRouter };
