import { Router } from 'express';
import * as projectControllers from '../controllers/projects';
import { advancedResults } from '../middlewares/advanced-results';
import { currentUser } from '../middlewares/current-user';
import { isAdmin } from '../middlewares/is-admin';
import { requireAuth } from '../middlewares/require-auth';
import { validateRequest } from '../middlewares/validate-request';
import { Project } from '../models/Project';
import { createProjectValidation } from '../validation/project';

const router = Router();

router.route('/').get(advancedResults(Project), projectControllers.getProjects);
router.route('/:id').get(projectControllers.getProject);

router
  .route('/admin')
  .put(currentUser, requireAuth, isAdmin, projectControllers.adminGetProjects);

router
  .route('/:id/admin')
  .put(currentUser, requireAuth, isAdmin, projectControllers.adminGetProject);

router
  .route('/')
  .post(
    currentUser,
    requireAuth,
    isAdmin,
    createProjectValidation,
    validateRequest,
    projectControllers.createProject
  );

router
  .route('/:id')
  .put(
    currentUser,
    requireAuth,
    isAdmin,
    createProjectValidation,
    validateRequest,
    projectControllers.updateProject
  );
router
  .route('/:id')
  .patch(currentUser, requireAuth, isAdmin, projectControllers.addProjectImage);

router
  .route('/:id/updateImages')
  .put(
    currentUser,
    requireAuth,
    isAdmin,
    projectControllers.updateProjectImages
  );

router
  .route('/:id')
  .delete(currentUser, requireAuth, isAdmin, projectControllers.deleteProject);

export { router as projectRouter };
