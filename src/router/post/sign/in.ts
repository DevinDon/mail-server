import { AMiddleware } from 'koa-backend-server';
import { User } from '../../../entity';
import { Session } from 'koa-session';

export const signIn: AMiddleware = async (c, next) => {
  const request = c.request.body;
  const session = c.session as Session;
  session.user = await User.findOne({ name: request.name, password: request.password });
  c.body = {
    status: Boolean(session.user),
    data: session.user
  };
  next();
};

export default signIn;
