import { Middleware } from 'koa';

export const signOut: Middleware = async (c, next) => {
  // const session = c.session as Session;
  c.body = {
    status: true,
    data: c.session
  };
  next();
};

export default signOut;
