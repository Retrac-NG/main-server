import { Request, NextFunction } from 'express';
import userService from '../services/user.service';
import CustomError from '../utils/customError.utils';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';

/**
 * User controller for route handling
 * @category Controllers
 * @example <caption>Using the controller for sample route</caption>
 * const user_ctrl = require('path/to/controller')
 *
 * const UserRoute = express.Router()
 * UserRoute
 * .route('/api/users')
 * .use(user_ctrl.CREATE)
 */
class user_ctrl {
  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Newly created user
   */
  async CREATE(req: Request, res: CustomResponseInterface) {
    const userData = req.body;
    const queryData = await userService.CREATE(userData);
    console.info(queryData);
    res.created!(queryData, 'New user');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns List of all users
   */
  async GET(req: Request, res: CustomResponseInterface) {
    const queryData = await userService.GET();
    res.found!(queryData, 'All users');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Single user by ID
   */
  async GET_BY_ID(
    req: Request,
    res: CustomResponseInterface,
    next: NextFunction
  ) {
    const userId = req.params.id;
    const queryData = await userService.GET_BY_ID(userId);

    // ======= check for null data -->
    queryData === null
      ? next(new CustomError(`No user found with ID ${userId}`, 404))
      : res.found!(queryData, `User with id ${userId || null}`);
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns update stats of all users
   */
  async UPDATE(req: Request, res: CustomResponseInterface) {
    const updateData = req.body;
    const queryData = await userService.UPDATE(updateData);
    res.updated!(queryData, 'All users');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Updated user
   */
  async UPDATE_BY_ID(req: Request, res: CustomResponseInterface) {
    const userId = req.params.id;
    const updateData = req.body;
    const queryData = await userService.UPDATE_BY_ID(userId, updateData);
    res.updated!(queryData, 'Single user');
  }

  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Delete details of deleted user
   */
  async DELETE(req: Request, res: CustomResponseInterface, next: NextFunction) {
    const userId = req.params.id;
    const queryData = await userService.DELETE(userId);

    // ======= check if delete count is more than 0 -->
    queryData === null
      ? next(new CustomError('No found document to be deleted', 404))
      : res.deleted!(queryData, userId || 'Single user');
  }
}

export default new user_ctrl();
