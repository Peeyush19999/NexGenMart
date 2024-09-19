import { check } from 'express-validator';

export const signUpValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  check('mobileNumber', 'Mobile number is required').not().isEmpty(),
];

export const loginValidator = [
  check('emailOrMobile', 'Email or Mobile number is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty(),
];