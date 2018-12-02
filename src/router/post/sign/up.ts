import { AMiddleware } from 'koa-backend-server';
import { User } from '../../../entity';
import { Session } from 'koa-session';

export const signUp: AMiddleware = async (c, next) => {
  const request = c.request.body;
  const session = c.session as Session;
  session.user = await User.insert({
    name: request.name,
    password: request.password
  });
  c.body = {
    status: Boolean(session.user),
    data: session.user
  };
  next();
};

export default signUp;
