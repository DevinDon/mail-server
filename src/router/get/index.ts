import { AMiddleware, RouterPaths } from 'koa-backend-server';
import mail from './mail';

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
  }
};

export default getPaths;
