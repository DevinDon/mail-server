import { AMiddleware, RouterPaths } from 'koa-backend-server';

const index: AMiddleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: false,
    data: 'This is the index path of patch, but it doesn\'t work now.'
  };
};

export const patchPaths: RouterPaths = {
  '/': {
    path: '/',
    ware: index
  }
};

export default patchPaths;
