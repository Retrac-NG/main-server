import { Router } from 'express';

const UserRoutes = Router();

// prettier-ignore
UserRoutes
    .route('/action')
    .get()

export default UserRoutes;
