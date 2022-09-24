"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AssetRoutes = (0, express_1.Router)();
// prettier-ignore
AssetRoutes
    .route('/assets');
// prettier-ignore
AssetRoutes
    .route('asset/car');
// prettier-ignore
AssetRoutes
    .route('asset/bike');
// prettier-ignore
AssetRoutes
    .route('asset/phone');
// prettier-ignore
AssetRoutes
    .route('asset/laptopn');
exports.default = AssetRoutes;
