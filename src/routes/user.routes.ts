import { Router } from 'express';
import userController from '@/controllers/user.controller';
import asyncHandler from '@/utils/asyncHandler.utils';

const UserRoutes = Router();

// prettier-ignore
UserRoutes
    .route('/user')
        .get(asyncHandler(userController.GET))
        .post(asyncHandler(userController.CREATE))
        .patch(asyncHandler(userController.UPDATE))

// prettier-ignore
UserRoutes
    .route('/user/:id')
        .get(asyncHandler(userController.GET_BY_ID))
        .patch(asyncHandler(userController.UPDATE_BY_ID))
        .delete(asyncHandler(userController.DELETE))

export default UserRoutes;
