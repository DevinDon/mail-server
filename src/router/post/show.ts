import { AMiddleware } from 'koa-backend-server';
import { User } from '../../entity';

export const show: AMiddleware = async (c, next) => {
  const request = c.request.body;
  const data = await User.find();
  c.body = {
    status: data ? true : false,
    data
  };
  next();
};

export default show;
