import UserRoutes from './user.routes';
import AssetRoutes from './asset.routes';
import { Router, Request, Response } from 'express';

const AppRouter = Router();

// Root
AppRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: '[⚡Server]: Server is  up' });
});

// prettier-ignore
AppRouter
    .use(UserRoutes)
    .use(AssetRoutes)

export default AppRouter;
