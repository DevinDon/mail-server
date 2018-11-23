import { AMiddleware, RouterPaths } from "koa-backend-server";
import signin from "./signin";

const index: AMiddleware = async (c, next) => {
  c.body = {
    status: c.session && c.session.status,
    data: c.session && c.session.user
  };
  next();
}

export const getPaths: RouterPaths = {
  '/': index,
  '/signin': signin
};

export default getPaths;
