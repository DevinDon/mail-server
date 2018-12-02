import { Server } from 'koa-backend-server';
import allPaths from './router';

const server: Server = new Server({
  address: {
    portocol: 'HTTP'
  },
  database: {
    ormconfig: true
  },
  router: {
    paths: allPaths,
    version: 'v1'
  },
  session: {
    keys: ['mail', 'server']
  }
});
