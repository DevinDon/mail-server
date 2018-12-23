import { Middleware } from 'koa';
import { User } from '../../entity';

export const user: Middleware = async (c, next) => {
  const request = c.request.query;
  const data = await User.findOne({ name: request.name });
  c.body = {
    status: !Boolean(data)
  };
  next();
};

export default user;
