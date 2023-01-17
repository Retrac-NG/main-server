import User from '../database/models/users.model';
import { UserType } from '../typescript/types/user.types';

/**
 * User service class
 * Handles all user services
 * @category Services
 * @example <caption>Creating a new user</caption>
 * // calling in user.controller.js
 * const user_service = require('path/to/user_service.js')
 *
 * const userData = req.body
 * const newUser = await user_service.CREATE(userData)
 * res.status(201).send(newUser)
 */
class user_service {
  /**
   * Creates a new user
   * @method
   * @param {UserType} userData - New User data
   * @returns {User}
   */
  async CREATE(userData: UserType) {
    const newUser = await User.create(userData);
    return newUser;
  }

  /**
   * Gets all users (no params needed)
   * @returns  {User[]}
   */
  async GET() {
    const allUsers = await User.find({}).lean();
    return allUsers;
  }

  /**
   *  Gets a single user by ID
   * @param {String} userId - ID of single user to be fetched
   * @returns {User}
   */
  async GET_BY_ID(userId: string) {
    const user = await User.findById(userId);
    return user;
  }

  /**
   * Updates all users
   * @param {Object} updateData - Object containing fields to be updated for all users
   * @returns {Object} status object for the update operation
   */
  async UPDATE(updateData: any) {
    const updatedUsers = await User.updateMany(
      {},
      { $set: updateData },
      { new: true }
    );
    return updatedUsers;
  }

  /**
   *
   * @param {String} userId - ID of user to be updated
   * @param {Object} updateData - Object containing fields to be edited
   * @returns {User}
   */
  async UPDATE_BY_ID(userId: string, updateData: any) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: updateData },
      { new: true }
    );
    return updatedUser;
  }

  /**
   *
   * @param {String} userId - ID of user to be deletd
   * @returns {User}
   */
  async DELETE(userId: string) {
    const deleteResponse = await User.findByIdAndDelete(userId);
    return deleteResponse;
  }
}

export default new user_service();
