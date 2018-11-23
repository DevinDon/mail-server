import { Server } from 'koa-backend-server';
import { ConnectionOptions } from 'typeorm';
import { Mail, User } from './entity';
import { postPaths, getPaths } from './router';

const database: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'docker',
  username: 'docker',
  password: 'docker',
  entities: [
    Mail,
    User
  ],
  synchronize: false,
  logging: true
};

const server: Server = new Server({
  database,
  keys: ['mail', 'server'],
  paths: { GET: getPaths, POST: postPaths },
  type: 'HTTP'
});
