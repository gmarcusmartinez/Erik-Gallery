import { Router } from "express";
import { getPrints } from "../controllers/prints";

const router = Router();
router.route("/").get(getPrints);

export { router as printRouter };
