import { tokenDecoder } from '../utils/validator.js';
import { responder } from '../utils/responder.js';

class Auth {
  async VERIFY(req, res, next) {
    console.info('Auth middleware called!');

    // -- check for token -->
    if (!req.headers.authorization) {
      console.log('no auth');
      console.log(req.headers);
      return responder(res, 403, 'error', 'unAuthorized');
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const data = tokenDecoder(token);
      res.authData = data;
      next();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new Auth();
