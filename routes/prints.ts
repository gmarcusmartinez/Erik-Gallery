import { Router } from "express";
import { get, getAll, create, update, remove } from "../controllers/prints";
import { currentUser } from "../middlewares/current-user";
import { isAdmin } from "../middlewares/is-admin";
import { requireAuth } from "../middlewares/require-auth";
import { advancedResults } from "../middlewares/advancedResults";
import { Print } from "../models/Print";

const router = Router();

router.route("/").get(advancedResults(Print), getAll);
router.route("/").post(currentUser, requireAuth, isAdmin, create);

router.route("/:id").get(get);
router.route("/:id").put(currentUser, requireAuth, isAdmin, update);
router.route("/:id").delete(currentUser, requireAuth, isAdmin, remove);

export { router as printRouter };
