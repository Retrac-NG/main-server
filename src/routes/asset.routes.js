import { Router } from 'express';
import gadgetController from '../controllers/gadgetController.js';
import auth from '../middlewares/auth.js';
import asyncHandler from '../utils/asyncHandler.js';

const AssetRouter = Router();

// prettier-ignore
AssetRouter.route('/assets/gadgets').post(
  auth.VERIFY,
  asyncHandler(gadgetController.CREATE)
);

export default AssetRouter;
