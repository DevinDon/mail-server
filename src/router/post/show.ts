import { Middleware } from 'koa';
import { User } from '../../entity';

export const show: Middleware = async (c, next) => {
  const request = c.request.body;
  const data = await User.find();
  c.body = {
    status: Boolean(data),
    data
  };
  next();
};

export default show;
