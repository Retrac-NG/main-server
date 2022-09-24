"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const router_1 = __importDefault(require("../routes/router"));
const preRoute = (app) => {
    !app &&
        console.warn('[⚠️warn]: pre-route middleware expected an app instance but got nothing');
    // prettier-ignore
    app &&
        app
            .use((0, cors_1.default)())
            .use((0, helmet_1.default)())
            .use((0, morgan_1.default)('[:method - :status] :url :response-time ms'))
            .use(router_1.default);
};
exports.default = preRoute;
