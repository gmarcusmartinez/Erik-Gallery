import { body } from 'express-validator';

export const createProjectValidation = [
  body('title').notEmpty().withMessage('Title required.'),
  body('mainImage').notEmpty().withMessage('Image required.'),
];
