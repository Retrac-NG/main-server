import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT,
  MONG0_URL: process.env.MONGO_URL,
  BCRYPT_HASH_SALT: process.env.BCRYPT_HASH_SALT,
  BCRYPT_HASH_PASSWORD: process.env.BCRYPT_HASH_PASSWORD,
  JWT_SECRET: process.env.JWT_SECRET,
};
