import { Router } from 'express';
import userController from '../controllers/userController.js';
import Auth from '../middlewares/auth.js';
import asyncHandler from '../utils/asyncHandler.js';

const UserRouter = Router();

// prettier-ignore
UserRouter
    .route('/users')
        .post(asyncHandler(userController.CREATE))
        .get(asyncHandler(userController.GET))
        .patch(asyncHandler(userController.UPDATE_ALL));

// prettier-ignore
UserRouter
    .route('/users/:id')
        .post(Auth.VERIFY, asyncHandler(userController.GET_BY_ID))
        .patch(Auth.VERIFY, asyncHandler(userController.UPDATE_BY_ID));

// prettier-ignore
UserRouter
    .route('/users-login')
        .post(asyncHandler(userController.LOGIN))

export default UserRouter;
