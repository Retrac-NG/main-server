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
const customError_utils_1 = __importDefault(require("../utils/customError.utils"));
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
    CREATE(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const queryData = ''; // await userService.CREATE(userData);
            console.info(queryData);
            res.created(queryData, 'New user');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns List of all users
     */
    GET(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryData = ''; // await userService.GET();
            res.found(queryData, 'All users');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns Single user by ID
     */
    GET_BY_ID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const queryData = ''; // await userService.GET_BY_ID(userId);
            // ======= check for null data -->
            queryData === null
                ? next(new customError_utils_1.default(`No user found with ID ${userId}`, 404))
                : res.found(queryData, `User with id ${userId || null}`);
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns update stats of all users
     */
    UPDATE(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = req.body;
            const queryData = ''; //  await userService.UPDATE(updateData);
            res.updated(queryData, 'All users');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns Updated user
     */
    UPDATE_BY_ID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const updateData = req.body;
            const queryData = ''; //  await userService.UPDATE_BY_ID(userId, updateData);
            res.updated(queryData, 'Single user');
        });
    }
    /**
     *
     * @param {Request} req - request Object
     * @param {CustomResponseInterface} res - CustomResponse Object
     * @returns Delete details of deleted user
     */
    DELETE(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const queryData = ''; //  await userService.DELETE(userId);
            // ======= check if delete count is more than 0 -->
            queryData === null
                ? next(new customError_utils_1.default('No found document to be deleted', 404))
                : res.deleted(queryData, userId || 'Single user');
        });
    }
}
exports.default = new user_ctrl();
