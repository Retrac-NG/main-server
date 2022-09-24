import { Router } from 'express';

const DeviceRoutes = Router();

// prettier-ignore
DeviceRoutes
    .route('/action')
    .get()

export default DeviceRoutes;
