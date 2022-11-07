"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asset_controller_1 = __importDefault(require("@/controllers/asset.controller"));
const asyncHandler_utils_1 = __importDefault(require("@/utils/asyncHandler.utils"));
const AssetRoutes = (0, express_1.Router)();
// prettier-ignore
AssetRoutes
    .route('/assets/:category')
    .get((0, asyncHandler_utils_1.default)(asset_controller_1.default.GET_ASSETS))
    .post((0, asyncHandler_utils_1.default)(asset_controller_1.default.CREATE));
// prettier-ignore
AssetRoutes
    .route('asset/assets/:id&:category')
    .delete((0, asyncHandler_utils_1.default)(asset_controller_1.default.DELETE));
exports.default = AssetRoutes;
