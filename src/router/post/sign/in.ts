import { AMiddleware } from 'koa-backend-server';
import { User } from '../../../entity';

export const signIn: AMiddleware = async (c, next) => {
  const request = c.request.body;
  const data = await User.findOne({ name: request.name, password: request.password });
  c.body = {
    status: data ? true : false,
    data
  };
  next();
};

export default signIn;
