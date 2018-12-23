import { Middleware } from 'koa';

export const status: Middleware = async (c, next) => {
  const session = c.session;
  c.body = {
    status: Boolean(session.user),
    data: session.user
  };
  next();
};

export default status;
