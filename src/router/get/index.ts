import { Middleware } from 'koa';
import { RouterPaths } from 'koa-backend-server';
import { allowAllCORS } from '../config';
import mail from './mail';
import status from './status';
import user from './user';

const index: Middleware = async (c, next) => {
  c.body = {
    status: true,
    url: {
      GET: {
        '/': 'This page',
        '/mail': 'Get mail'
      }
    }
  };
  await next();
};

export const getPaths: RouterPaths = {
  '/': {
    path: '/',
    ware: index
  },
  '/mail': {
    path: '/mail',
    ware: mail
  },
  '/user': {
    path: '/user',
    ware: user,
    cors: allowAllCORS
  },
  '/status': {
    path: '/status',
    ware: status,
    cors: allowAllCORS
  }
};

export default getPaths;
