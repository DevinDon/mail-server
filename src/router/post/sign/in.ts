import { Middleware } from 'koa';
import { User } from '../../../entity';

export const signIn: Middleware = async (c, next) => {
  const request = c.request.body;
  const session = c.session;
  session.user = await User.findOne({ name: request.name, password: request.password });
  c.body = {
    status: Boolean(session.user),
    data: session.user
  };
  next();
};

export default signIn;
