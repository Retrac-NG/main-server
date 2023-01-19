import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import AppRoute from '../routes/routes.js';

export const PreRouteMiddleware = (ExpressApp) => {
  if (!ExpressApp) throw new Error('Pre route middleware did not get an app');

  // prettier-ignore
  ExpressApp
        .use(helmet())
        .use(cors())
        .use(express.json())
        .use(morgan('tiny'))
        .use(AppRoute)
};
