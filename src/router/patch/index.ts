import { RouterPaths } from 'koa-backend-server';
import { Middleware } from 'koa';

const index: Middleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: false,
    data: 'This is the index path of patch, but it doesn\'t work now.'
  };
  await next();
};

export const patchPaths: RouterPaths = {
  '/': {
    path: '/',
    ware: index
  }
};

export default patchPaths;
