import { Router } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import todoController from './todos.controller';
import { middlewares } from '@/middlewares';
import { schemas } from './todos.models';

const todosRouter: Router = Router();

todosRouter.get(
	'/all',
	middlewares.validateBody(schemas.queryTodoSchema),
	middlewares.authenticated,
	middlewares.ctrlWrapper(todoController.getAllTodo.bind(todoController)),
);

todosRouter.get(
	'/:id',
	middlewares.authenticated,
	middlewares.isExist(Prisma.ModelName.Todo as keyof PrismaClient),
	middlewares.ctrlWrapper(todoController.getOneTodoById.bind(todoController)),
);

todosRouter.post(
	'/create',
	middlewares.authenticated,
	middlewares.validateBody(schemas.createTodoSchema),
	todoController.createTodo.bind(todoController),
);

todosRouter.put(
	'/:id',
	middlewares.authenticated,
	middlewares.isExist(Prisma.ModelName.Todo as keyof PrismaClient),
	middlewares.validateBody(schemas.updateTodoSchema),
	todoController.updateTodoById.bind(todoController),
);
todosRouter.delete(
	'/:id',
	middlewares.authenticated,
	middlewares.isExist(Prisma.ModelName.Todo as keyof PrismaClient),
	todoController.deleteTodoById.bind(todoController),
);

export default todosRouter;
