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
  next();
};

export const getPaths: RouterPaths = {
  '/': index,
  '/mail': mail
};

export default getPaths;
