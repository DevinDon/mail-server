import { AMiddleware } from 'koa-backend-server';
import { User } from '../../../entity';

export const signUp: AMiddleware = async (c, next) => {
  const request = c.request.body;
  const data = await User.insert({
    name: request.name,
    password: request.password
  });
  c.body = {
    status: data ? true : false,
    data
  };
  next();
};

export default signUp;
