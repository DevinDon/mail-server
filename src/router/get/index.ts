import { AMiddleware, RouterPaths } from 'koa-backend-server';
import { allowAllCORS } from '../config';
import mail from './mail';
import user from './user';

const index: AMiddleware = async (c, next) => {
  c.body = {
    status: true,
    url: {
      GET: {
        '/': 'This page',
        '/mail': 'Get mail'
      }
    }
  };
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
  }
};

export default getPaths;
