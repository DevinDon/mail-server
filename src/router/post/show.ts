import { AMiddleware } from 'koa-backend-server';
import { User } from '../../entity';

export const show: AMiddleware = async (c, next) => {
  const data = c.request.body;
  const user = await User.find();
  c.body = {
    status: user ? true : false,
    data: user
  };
  next();
};

export default show;
