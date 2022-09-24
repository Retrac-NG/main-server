import { Router } from 'express';

const UserRoutes = Router();

// prettier-ignore
UserRoutes
    .route('/user')
    .get()

export default UserRoutes;
