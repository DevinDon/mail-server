import { AllPaths } from 'koa-backend-server';
import deletePaths from './delete';
import getPaths from './get';
import patchPaths from './patch';
import postPaths from './post';
import putPaths from './put';
import optionsPaths from './options';

export const allPaths: AllPaths = {
  DELETE: deletePaths,
  GET: getPaths,
  // OPTIONS: optionsPaths,
  PATCH: patchPaths,
  POST: postPaths,
  PUT: putPaths
};

export default allPaths;
