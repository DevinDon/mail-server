import { AMiddleware, RouterPaths } from 'koa-backend-server';

const index: AMiddleware = async (c, next) => {
  const request = c.request.body;
  c.body = {
    status: false,
    request,
    data: 'This is the index path of delete operation, but it doesn\'t work now.'
  };
};

export const deletePaths: RouterPaths = {
  '/': {
    path: '/',
    ware: index
  }
};

export default deletePaths;
