import { AMiddleware } from 'koa-backend-server';
import { User } from '../../entity';

export const user: AMiddleware = async (c, next) => {
  const request = c.request.query;
  const data = await User.findOne({ name: request.name });
  c.body = {
    status: !Boolean(data)
  };
  next();
};

export default user;
