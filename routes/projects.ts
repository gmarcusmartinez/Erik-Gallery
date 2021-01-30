import { Router } from 'express';
import * as projectControllers from '../controllers/projects';
import { advancedResults } from '../middlewares/advanced-results';
import { currentUser } from '../middlewares/current-user';
import { isAdmin } from '../middlewares/is-admin';
import { requireAuth } from '../middlewares/require-auth';
import { Project } from '../models/Project';

const router = Router();

router.route('/').get(advancedResults(Project), projectControllers.getProjects);
router.route('/:id').get(projectControllers.getProject);

router
  .route('/admin')
  .put(currentUser, requireAuth, isAdmin, projectControllers.adminGetProjects);

export { router as projectRouter };
