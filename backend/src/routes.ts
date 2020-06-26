import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.use('/user', UserController);

export default routes;