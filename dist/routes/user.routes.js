"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes = (0, express_1.Router)();
// prettier-ignore
UserRoutes
    .route('/action')
    .get();
exports.default = UserRoutes;
