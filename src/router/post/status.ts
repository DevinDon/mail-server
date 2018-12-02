import { AMiddleware } from 'koa-backend-server';
import { Session } from 'koa-session';

export const status: AMiddleware = async (c, next) => {
  const session = c.session as Session;
  c.body = {
    status: Boolean(session.user),
    data: session.user
  };
  next();
};

export default status;
