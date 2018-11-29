import { AMiddleware, RouterPaths } from 'koa-backend-server';
import signin from './signin';
import mail from './mail';

const index: AMiddleware = async (c, next) => {
  c.body = {
    status: true,
    url: {
      GET: {
        '/': 'This page',
        '/signin': 'Sign in page',
        '/main/:id': 'Get mail'
      }
    }
  };
  next();
};

export const getPaths: RouterPaths = {
  '/': index,
  '/signin': signin,
  '/mail/:id': mail
};

export default getPaths;
