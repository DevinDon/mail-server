import { Middleware } from 'koa';
import { RouterPaths } from 'koa-backend-server';
import { allowAllCORS } from '../config';
import show from './show';
import signIn from './sign/in';
import signOut from './sign/out';
import signUp from './sign/up';

const index: Middleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: true,
    data: postPaths
  };
  next();
};

export const postPaths: RouterPaths = {
  '/': {
    path: '/',
    ware: index,
    cors: allowAllCORS
  },
  '/show': {
    path: '/show',
    ware: show,
    cors: allowAllCORS
  },
  '/sign/in': {
    path: '/sign/in',
    ware: signIn,
    cors: allowAllCORS
  },
  '/sign/out': {
    path: '/sign/out',
    ware: signOut,
    cors: allowAllCORS
  },
  '/sign/up': {
    path: '/sign/up',
    ware: signUp,
    cors: allowAllCORS
  }
};

export default postPaths;
