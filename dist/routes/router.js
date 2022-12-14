"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("@/routes/user.routes"));
const asset_routes_1 = __importDefault(require("@/routes/asset.routes"));
const express_1 = require("express");
const AppRouter = (0, express_1.Router)();
// Root
AppRouter.get('/', (req, res) => {
    res.status(200).json({ status: 200, message: '[⚡Server]: Server is  up' });
});
// prettier-ignore
AppRouter
    .use(user_routes_1.default)
    .use(asset_routes_1.default);
exports.default = AppRouter;
