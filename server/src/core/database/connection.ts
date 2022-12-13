import * as dotenv from 'dotenv';
dotenv.config();

import { databaseConfig } from './config';

const { NODE_ENV } = process.env;

let config;

switch (NODE_ENV) {
  case 'development':
    config = databaseConfig.development;
    break;
  case 'production':
    config = databaseConfig.production;
    break;
  case 'test':
    config = databaseConfig.test;
    break;
  default:
    throw new Error('invalid database config variables');
}

export default config;
