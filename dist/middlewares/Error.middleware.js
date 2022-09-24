"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customResponse_utils_1 = __importDefault(require("../utils/customResponse.utils"));
// ======= list of error types -->
const ErrorList = [
    'CastError',
    'JsonWebTokenError',
    'ValidationError',
    'SyntaxError',
    'MongooseError',
    'MongoError',
];
exports.default = (app) => {
    // ======= 404 NotFound -->
    app.use('*', (req, res) => {
        res.status(404).send(new customResponse_utils_1.default('Route not found', null, false));
    });
    // ======= Error Routes -->
    app.use((error, req, res, next) => {
        if (error.name === 'CustomError') {
            return res
                .status(error.status)
                .send(new customResponse_utils_1.default(error.message, null, false));
        }
        if (error.name === 'AuthError') {
            return res
                .status(error.status)
                .send(new customResponse_utils_1.default(error.message, null, false));
        }
        if (error.name === 'MongoError') {
            return res
                .status(error.status)
                .send(new customResponse_utils_1.default(error.message, null, false));
        }
        if (ErrorList.includes(error.name)) {
            return res
                .status(400)
                .send(new customResponse_utils_1.default(error.message, null, false));
        }
        return res
            .status(500)
            .send(new customResponse_utils_1.default(error.message || 'Internal server error', null, false));
    });
    return app;
};
