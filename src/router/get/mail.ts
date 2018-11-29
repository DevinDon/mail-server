import { AMiddleware } from 'koa-backend-server';
import { Mail } from '../../entity';

export const mail: AMiddleware = async (c, next) => {
  const data = c.params;
  const result = await Mail.findOne({ id: data.id }, { relations: ['content'] });
  c.body = {
    status: result ? true : false,
    router: c.params,
    query: c.query,
    data: result
  };
  next();
};

export default mail;
