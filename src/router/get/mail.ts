import { Middleware } from 'koa';
import { Mail } from '../../entity';

export const mail: Middleware = async (c, next) => {
  const request = c.query;
  const data = await Mail.findOne({ id: request.id }, { relations: ['content'] });
  c.body = {
    status: data ? true : false,
    data
  };
};

export default mail;
