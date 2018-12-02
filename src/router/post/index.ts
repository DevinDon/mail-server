import { AMiddleware, CORS, RouterPaths } from 'koa-backend-server';
import show from './show';
import signIn from './sign/in';
import signUp from './sign/up';
import signOut from './sign/out';
import status from './status';

const cors: CORS = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': ['POST', 'OPTIONS', 'GET'],
  'Access-Control-Allow-Origin': '*'
};

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
    cors
  },
  '/show': {
    path: '/show',
    ware: show,
    cors
  },
  '/sign/in': {
    path: '/sign/in',
    ware: signIn,
    cors
  },
  '/sign/out': {
    path: '/sign/out',
    ware: signOut,
    cors
  },
  '/sign/up': {
    path: '/sign/up',
    ware: signUp,
    cors
  },
  '/status': {
    path: '/status',
    ware: status,
    cors
  }
};

export default postPaths;
