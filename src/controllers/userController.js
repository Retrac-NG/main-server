import userServices from '../services/userServices.js';
import { responder } from '../utils/responder.js';

class UserController {
  async CREATE(req, res) {
    const newUserData = req.body;
    const query = await userServices.CREATE(newUserData);
    responder(res, 200, 'ok', 'Created a new user', query);
  }

  async GET(req, res) {
    const query = await userServices.GET();
    responder(res, 200, 'ok', 'Get all users', query);
  }

  async GET_BY_ID(req, res) {
    const userID = res.authData;
    const query = await userServices.GET_BY_ID(userID.id);
    responder(res, 200, 'ok', 'USer found', query);
  }

  async UPDATE_ALL(req, res) {
    const { updateData } = res.body;
    const query = await userServices.UPDATE_ALL(updateData);
    responder(res, 200, 'ok', 'Updated all users', query);
  }

  async UPDATE_BY_ID(req, res) {
    const { id } = res.authData;
    const { updateData } = req.body;
    const query = await userServices.UPDATE_BY_ID(updateData, id);
    responder(res, 200, 'ok', 'User updated', query);
  }

  async LOGIN(req, res) {
    const userDetails = req.body;
    console.log(userDetails);
    const query = await userServices.LOGIN(userDetails);
    responder(res, 200, 'ok', 'User Authenticated', query);
  }
}

export default new UserController();
