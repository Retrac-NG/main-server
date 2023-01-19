import { Router } from 'express';
import UserRouter from './user.routes.js';

const AppRoute = Router();
AppRoute.route('/').get((req, res) =>
  res.status(200).json({
    route: '/',
    message: 'This is Retrac root route and it has been hit',
    status: 200,
  })
);

// prettier-igore
AppRoute.use(UserRouter);
export default AppRoute;
