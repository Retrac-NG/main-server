import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { Express } from 'express';
import AppRouter from '../routes/router';

const preRoute = (app: Express): void => {
  !app &&
    console.warn(
      '[⚠️warn]: pre-route middleware expected an app instance but got nothing'
    );

  // prettier-ignore
  app &&
    app
      .use(cors())
      .use(helmet())
      .use(morgan('[:method - :status] :url :response-time ms'))
      .use(AppRouter)
};

export default preRoute;
