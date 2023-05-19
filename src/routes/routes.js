import { Router } from 'express';
import AssetRouter from './asset.routes.js';
import UserRouter from './user.routes.js';

const AppRoute = Router();
AppRoute.route('/').get((req, res) =>
  res.status(200).json({
    route: '/',
    message: 'This is Retrac root route and it has been hit',
    status: 200,
  })
);

// prettier-ignore
AppRoute
  .use(UserRouter)
  .use(AssetRouter);
export default AppRoute;
