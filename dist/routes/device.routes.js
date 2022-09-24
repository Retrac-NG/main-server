"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DeviceRoutes = (0, express_1.Router)();
// prettier-ignore
DeviceRoutes
    .route('/action')
    .get();
exports.default = DeviceRoutes;
