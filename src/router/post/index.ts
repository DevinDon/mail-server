import { AMiddleware, CORS, RouterPaths } from 'koa-backend-server';
import show from './show';
import signIn from './sign/in';
import signUp from './sign/up';
import signOut from './sign/out';
import status from './status';
import { allowAllCORS } from '../config';

const index: AMiddleware = async (c, next) => {
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
  },
  '/status': {
    path: '/status',
    ware: status,
    cors: allowAllCORS
  }
};

export default postPaths;
