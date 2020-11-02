import { Router } from "express";
import { createPrint, deletePrint, getPrints } from "../controllers/prints";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
// import { advancedResults } from "../middlewares/advancedResults";

const router = Router();

router.route("/").get(getPrints);
router.route("/").post(currentUser, requireAuth, isAdmin, createPrint);
router.route("/:id").delete(currentUser, requireAuth, isAdmin, deletePrint);

export { router as printRouter };
