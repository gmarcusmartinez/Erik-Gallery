import { body } from 'express-validator';

export const createPrintValidation = [
  body('description').notEmpty().withMessage('Description required.'),
  body('mainImage').notEmpty().withMessage('Image required.'),
  body('size').notEmpty().withMessage('Size required.'),
];
