import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';


import UserController from '../app/controllers/userController';

const routes = new Router();
const userController = new UserController()

routes.get('/', userController.index);


routes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);



export default routes;