import { Response, Request } from 'express';
import TodoService from '@/modules/todos/todos.service';
import { Helpers } from '@/helpers';
import { User } from '@prisma/client';
import { QueryType } from '@/types/todos.type';
import { paginate } from '@/utils/paginate';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async createTodo(req: Request, res: Response): Promise<void> {
		const { body } = req;
		const { id } = req.user as User;

		const todo = await this.todoService.createTodo({
			...body,
			authorId: id,
		});

		if (!todo) throw Helpers.httpErrors(500, 'invalid todo data');

		res.status(201).json({
			messages: Helpers.codeMessages(201),
			data: todo,
		});
	}

	async getOneTodoById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const { id: userId } = req.user as User;

		const todo = await this.todoService.getTodoById(Number(id), userId);

		if (!todo) {
			throw Helpers.httpErrors(404);
		}

		res.json({ messages: Helpers.codeMessages(200), data: todo });
	}

	async getAllTodo(req: Request, res: Response): Promise<void> {
		const { id } = req.user as User;
		const { page = '1', limit = '10', title } = req.query as QueryType;

		const count = await this.todoService.countTodosByAuthorId(id, title);

		const { results, paginateOptions, totalPages } = paginate(count, {
			page,
			limit,
		});

		const todos = await this.todoService.findAllByAuthorIdAndQuery(id, {
			title,
			...paginateOptions,
		});

		if (!todos || todos.length === 0) {
			res.json({
				message: 'No todos found for the given query',
				data: [],
				pagination: results,
			});
			return;
		}

		res.json({
			message: 'Success',
			data: todos,
			pagination: results,
			totalPages,
		});
	}

	async updateTodoById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const { id: userId } = req.user as User;

		const updatedTodo = await this.todoService.updateTodo(
			Number(id),
			req.body,
			userId,
		);

		if (!updatedTodo) throw Helpers.httpErrors(500, 'invalid todo data');

		res.json({ messages: Helpers.codeMessages(200), data: updatedTodo });
	}

	async deleteTodoById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const { id: userId } = req.user as User;

		const deletedTodo = await this.todoService.deleteTodo(
			Number(id),
			userId,
		);

		if (!deletedTodo) {
			throw Helpers.httpErrors(404);
		}

		res.json({ messages: Helpers.codeMessages(200) });
	}
}

const todoController = new TodoController(new TodoService());

export default todoController;
