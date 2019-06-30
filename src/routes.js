import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import SessionsController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
