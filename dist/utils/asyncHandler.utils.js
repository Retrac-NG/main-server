"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customError_utils_1 = __importDefault(require("../utils/customError.utils"));
/**
 * Wrapper function that takes in another function (most likely
 * a controller) and tries to resolve it and catches error in
 * case of any.
 *
 * @param {Function} func - Async function to be resolved
 * @example <caption>Wrapping a controller</caption>
 * const {Router} = require('express')
 * const asyncHandler = require('path/to/asyncHandler.js')
 *
 * const UserRoute = Router()
 * UserRoute
 * .route('/user/')
 * .get(asyncHandler( routeController ))
 * @returns {*} Whatever the return value of the func parameter is
 */
const asyncHandler = (func) => (req, res, next) => {
    // prettier-ignore
    Promise
        .resolve(func(req, res, next))
        .catch((error) => next(new customError_utils_1.default(error.message || error.name)));
};
exports.default = asyncHandler;
