import { Router } from "express";
import { validateRequest } from "../middlewares/validate-request";
import { createOrder } from "../controllers/orders";
import { createOrderValidation } from "../validation/order";

const router = Router();
router.route("/").post(createOrderValidation, validateRequest, createOrder);

export { router as orderRouter };
