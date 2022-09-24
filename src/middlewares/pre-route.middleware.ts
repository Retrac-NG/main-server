import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { Express } from 'express';
import AppRouter from '../routes/router';

/**
 * @name Pre-Route
 * Takes in an Express app instance as args and applies all listed middlewares
 *
 * @category Middlewares
 */
export default (app: Express): void => {
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
