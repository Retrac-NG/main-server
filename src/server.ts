import express from 'express';
import { env } from './config/env.config';
import preRoute from './middlewares/pre-route.middleware';

const app = express();

preRoute(app);

app.listen(env.PORT, () => {
  console.log(`[⚡server]: Server started...`);
});

export default app;
