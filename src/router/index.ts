import { AllPaths } from 'koa-backend-server';
import deletePaths from './delete';
import getPaths from './get';
import patchPaths from './patch';
import postPaths from './post';
import putPaths from './put';

export const allPaths: AllPaths = {
  DELETE: deletePaths,
  GET: getPaths,
  PATCH: patchPaths,
  POST: postPaths,
  PUT: putPaths
};

export default allPaths;
