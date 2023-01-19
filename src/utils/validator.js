// -- Any sort of validations needed to be carried out -->
import jwt from 'jsonwebtoken';
import { env } from '../config/env.config.js';
import { responder } from './responder.js';

/**
 * Validates signup data
 * @param {*} userData - User object to be validated
 */
export const signUpValidator = (userData) => {
  // -- check email -->
  const validEmail = userData.email.test(
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
  );
  if (!validEmail) return { state: false, message: 'No valid email' };

  // -- check password -->
  const validPassword = userData.length >= 6;
  if (!validPassword) return { state: false, message: 'password too short' };

  return { state: true, message: 'validated' };
};

/**
 * Encodes a given data to jwt token
 * @param {*} data - Data to be signed with jwt
 * @returns JWT token
 */
export const tokenizer = (data) => {
  const token = jwt.sign(data, env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return token;
};

/**
 * Decodes a jwt token
 * @param {String} token - jwt token to be decoded
 * @returns Decoded jwt data
 */
export const tokenDecoder = (token) => {
  const data = jwt.verify(token, env.JWT_SECRET);
  return data;
};
