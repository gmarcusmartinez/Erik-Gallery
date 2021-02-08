import { body } from 'express-validator';

export const updatBioValidation = [
  body('text').not().isEmpty().withMessage('Text must not be empty.'),
];
