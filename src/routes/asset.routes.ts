import { Router } from 'express';
import assetController from '@/controllers/asset.controller';
import asyncHandler from '@/utils/asyncHandler.utils';

const AssetRoutes = Router();

// prettier-ignore
AssetRoutes
    .route('/assets/:category')
    .get(asyncHandler(assetController.GET_ASSETS))
    .post(asyncHandler(assetController.CREATE))

// prettier-ignore
AssetRoutes
    .route('asset/assets/:id&:category')
    .delete(asyncHandler(assetController.DELETE))

export default AssetRoutes;
