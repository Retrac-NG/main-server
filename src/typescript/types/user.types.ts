import { Document, Types } from 'mongoose';

export type UserType = Document & {
  first_name: string;
  last_name: string;
  other_name?: string;
  email: string | any;
  password: string | any;
  phone: number;
  address: string;
  assets?: [Types.ObjectId];
  reported?: number;
  found?: number;
};
