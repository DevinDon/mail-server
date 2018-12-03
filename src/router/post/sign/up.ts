import { AMiddleware } from 'koa-backend-server';
import { User } from '../../../entity';
import { Session } from 'koa-session';

export const signUp: AMiddleware = async (c, next) => {
  const request = c.request.body;
  const session = c.session as Session;
  if (!Boolean(await User.findOne({ name: request.name }))) {
    const insert = await User.insert({
      name: request.name,
      password: request.password
    });
    session.user = await User.findOne(insert.raw.insertId);
  }
  c.body = {
    status: Boolean(session.user),
    data: session.user
  };
  next();
};

export default signUp;
