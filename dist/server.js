"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_config_1 = require("@/config/env.config");
const pre_route_middleware_1 = __importDefault(require("@/middlewares/pre-route.middleware"));
const app = (0, express_1.default)();
(0, pre_route_middleware_1.default)(app);
app.listen(env_config_1.env.PORT, () => {
    console.log(`[⚡server]: Server started...`);
});
exports.default = app;
