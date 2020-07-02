import { Router } from 'express';
import UserController from './controllers/UserController';
import SystemController from './controllers/SystemController';

const routes = Router();

routes.use('/user', UserController);
routes.use('/system', SystemController);

export default routes;