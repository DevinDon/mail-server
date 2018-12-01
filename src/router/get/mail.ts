import { AMiddleware } from 'koa-backend-server';
import { Mail } from '../../entity';

export const mail: AMiddleware = async (c, next) => {
  const request = c.query;
  const data = await Mail.findOne({ id: request.id }, { relations: ['content'] });
  c.body = {
    status: data ? true : false,
    data
  };
  next();
};

export default mail;
