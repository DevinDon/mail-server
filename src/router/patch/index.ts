import { AMiddleware, RouterPaths } from 'koa-backend-server';

const index: AMiddleware = async (c, next) => {
  const data = c.request.body;
  c.body = {
    status: true,
    request: data,
    data: {
      any: 'any'
    }
  };
  next();
};

export const patchPaths: RouterPaths = {
  '/': index
};

export default patchPaths;
