import { Router } from "express";
import { createCart, getCart } from "../controllers/cart";

const router = Router();
router.route("/").get(getCart);
router.route("/").post(createCart);

export { router as cartRouter };
