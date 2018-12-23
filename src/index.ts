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
    name: 'session.id',
    domain: 'localhost',
    secert: ['keys'],
    httpOnly: true,
    // maxAge: 86400,
    redis: {
      host: '106.14.179.192',
      port: 16379
    }
  }
});

server.listen();
