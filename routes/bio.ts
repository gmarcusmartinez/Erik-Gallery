import { Router } from 'express';
import * as bioControllers from '../controllers/bio';
import { currentUser } from '../middlewares/current-user';
import { isAdmin } from '../middlewares/is-admin';
import { requireAuth } from '../middlewares/require-auth';
import { validateRequest } from '../middlewares/validate-request';
import { updatBioValidation } from '../validation/bio';

const router = Router();

router.route('/').get(bioControllers.getBio);

router
  .route('/:id')
  .put(
    currentUser,
    requireAuth,
    isAdmin,
    updatBioValidation,
    validateRequest,
    bioControllers.updateBio
  );

export { router as bioRouter };
