import { AMiddleware, now } from 'koa-backend-server';

export const signin: AMiddleware = async (c, next) => {
  if (c.session) {
    c.session.status = true;
    c.session.user = {
      name: now(),
      password: 'test'
    };
    c.body = 'Successful sign in';
  } else {
    c.body = 'Something wrong.';
  }
  next();
};

export default signin;
