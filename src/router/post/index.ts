import { IMiddleware } from 'koa-router';
import { RouterPaths, now } from 'koa-backend-server';
import show from './show';
import { User } from '../../entity';

const index: IMiddleware = async (c: any, next) => {
  const result = await User.insert({ name: now(), password: 'test' });
  c.body = {
    status: result ? true : false,
    data: result
  };
  next();
};

export const postPaths: RouterPaths = {
  '/': index,
  '/show': show
};

export default postPaths;
