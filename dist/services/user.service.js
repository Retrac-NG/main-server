"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = __importDefault(require("@/models/users.model"));
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
    CREATE(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield users_model_1.default.create(userData);
            return newUser;
        });
    }
    /**
     * Gets all users (no params needed)
     * @returns  {User[]}
     */
    GET() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield users_model_1.default.find({}).lean();
            return allUsers;
        });
    }
    /**
     *  Gets a single user by ID
     * @param {String} userId - ID of single user to be fetched
     * @returns {User}
     */
    GET_BY_ID(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_model_1.default.findById(userId);
            return user;
        });
    }
    /**
     * Updates all users
     * @param {Object} updateData - Object containing fields to be updated for all users
     * @returns {Object} status object for the update operation
     */
    UPDATE(updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUsers = yield users_model_1.default.updateMany({}, { $set: updateData }, { new: true });
            return updatedUsers;
        });
    }
    /**
     *
     * @param {String} userId - ID of user to be updated
     * @param {Object} updateData - Object containing fields to be edited
     * @returns {User}
     */
    UPDATE_BY_ID(userId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield users_model_1.default.findOneAndUpdate({ _id: userId }, { $set: updateData }, { new: true });
            return updatedUser;
        });
    }
    /**
     *
     * @param {String} userId - ID of user to be deletd
     * @returns {User}
     */
    DELETE(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResponse = yield users_model_1.default.findByIdAndDelete(userId);
            return deleteResponse;
        });
    }
}
exports.default = new user_service();
