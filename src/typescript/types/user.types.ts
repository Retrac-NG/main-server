export type UserType = {
  first_name: string;
  lastname: string;
  other_name?: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  assets?: [any];
  reported?: number;
  found?: number;
};
