import { AMiddleware, RouterPaths } from 'koa-backend-server';

const index: AMiddleware = async (c, next) => {
  const data = c.request.body;
  c.body = {
    status: data ? true : false,
    data
  };
  next();
};

export const deletePaths: RouterPaths = {
  '/': index
};

export default deletePaths;
