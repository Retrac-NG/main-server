import mongoose from 'mongoose';
import { env } from '../config/env.config.js';

const mongoConnect = async () => {
  console.info('Trying mongo connection...');

  mongoose.connect(
    env.MONG0_URL,
    {
      keepAlive: true,
      connectTimeoutMS: 60000,
    },
    (error) => {
      //   prettier-ignore
      error
              ? console.error(error.message)
              : console.info('[⚡Database]: plugged in!')
    }
  );
};

export default mongoConnect;
