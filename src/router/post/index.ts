import { RouterPaths, AMiddleware } from 'koa-backend-server';
import show from './show';
import signIn from './sign/in';
import signUp from './sign/up';

const index: AMiddleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: true,
    data: postPaths
  };
  next();
};

export const postPaths: RouterPaths = {
  '/': index,
  '/show': show,
  '/sign/in': signIn,
  '/sign/up': signUp
};

export default postPaths;
