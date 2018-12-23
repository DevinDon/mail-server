import { Middleware } from 'koa';
import { RouterPaths } from 'koa-backend-server';

const index: Middleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: false,
    data: 'This is the index of put path, but it doesn\'t work now.'
  };
};

export const putPaths: RouterPaths = {
  '/': {
    path: '/',
    ware: index
  }
};

export default putPaths;
