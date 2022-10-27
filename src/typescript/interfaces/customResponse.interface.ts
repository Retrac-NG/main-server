import { Response } from 'express';

export interface CustomResponseInterface extends Response {
  success?(data: any, target: string): void;
  created?(data: any, target: string): void;
  found?(data: any, target: string): void;
  updated?(data: any, target: string): void;
  deleted?(data: any, target: string): void;
}
