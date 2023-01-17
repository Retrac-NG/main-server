"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
const UserRoutes = (0, express_1.Router)();
// prettier-ignore
UserRoutes
    .route('/user')
    .get((0, asyncHandler_utils_1.default)(user_controller_1.default.GET))
    .post((0, asyncHandler_utils_1.default)(user_controller_1.default.CREATE))
    .patch((0, asyncHandler_utils_1.default)(user_controller_1.default.UPDATE));
// prettier-ignore
UserRoutes
    .route('/user/:id')
    .get((0, asyncHandler_utils_1.default)(user_controller_1.default.GET_BY_ID))
    .patch((0, asyncHandler_utils_1.default)(user_controller_1.default.UPDATE_BY_ID))
    .delete((0, asyncHandler_utils_1.default)(user_controller_1.default.DELETE));
exports.default = UserRoutes;
