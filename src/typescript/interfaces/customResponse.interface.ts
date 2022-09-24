import { Response } from 'express';

export interface CustomResponseInterface extends Response {
  success?: any;
  created?: any;
  found?: any;
  updated?: any;
  deleted?: any;
}
