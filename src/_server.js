import express from 'express';
import { env } from './config/env.config.js';
import { PreRouteMiddleware } from './middlewares/pre-route.js';
import mongoConnect from './database/connect.db.js';

const app = express();
PreRouteMiddleware(app);
mongoConnect();

// -- Start the server  -->
app.listen(process.env.PORT || env.PORT, (error) => {
  if (error) throw new Error('There was an error starting the server');
  console.log(`[⚡Server]: Server running on port - ${env.PORT}`);
});

process.on('uncaughtException', (error) => {
  console.log(error.message);
});

process.on('unhandledRejection', (error) => {
  console.log(error.message);
});
