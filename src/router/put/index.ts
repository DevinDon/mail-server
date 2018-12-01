import { AMiddleware, RouterPaths, now } from 'koa-backend-server';

const index: AMiddleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: false,
    data: 'This is the index of put path, but it doesn\'t work now.'
  };
  next();
};

export const putPaths: RouterPaths = {
  '/': index
};

export default putPaths;
