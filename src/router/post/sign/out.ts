import { AMiddleware } from 'koa-backend-server';
import { Session } from 'koa-session';

export const signOut: AMiddleware = async (c, next) => {
  // const session = c.session as Session;
  c.body = {
    status: true,
    data: c.session = null
  };
  next();
};

export default signOut;
