"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_config_1 = require("./config/env.config");
const app = (0, express_1.default)();
app.listen(env_config_1.env.PORT, () => {
    console.log(`[⚡server]: Server started...`);
});
