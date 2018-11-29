import { Server } from 'koa-backend-server';
import allPaths from './router';

const server: Server = new Server({
  database: true,
  keys: ['mail', 'server'],
  paths: allPaths,
  type: 'HTTP',
  version: 'v1'
});
