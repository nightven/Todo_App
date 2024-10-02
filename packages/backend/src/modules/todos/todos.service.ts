import { TodoType } from '@/types/todos.type';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoService {
	async findAllByAuthorIdAndQuery(
		authorId: number,
		paginateOptions: { title?: string; skip?: number; take?: number },
	): Promise<TodoType[]> {
		const { title, skip = 0, take = 10 } = paginateOptions;

		const where: Prisma.TodoWhereInput = {
			authorId,
			...(title && {
				title: {
					contains: title,
					mode: Prisma.QueryMode.insensitive,
				},
			}),
		};

		const todos = await prisma.todo.findMany({
			where,
			skip,
			take,
		});

		return todos;
	}

	async countTodosByAuthorId(
		authorId: number,
		title?: string,
	): Promise<number> {
		const where: Prisma.TodoWhereInput = {
			authorId,
			...(title && {
				title: {
					contains: title,
					mode: Prisma.QueryMode.insensitive,
				},
			}),
		};
		const res = await prisma.todo.count({ where });
		return res;
	}

	async createTodo(data: TodoType): Promise<TodoType> {
		return await prisma.todo.create({ data });
	}

	async getTodoById(id: number, userId: number): Promise<TodoType | null> {
		return await prisma.todo.findFirst({
			where: {
				id: id,
				authorId: userId,
			},
		});
	}

	async updateTodo(
		id: number,
		data: TodoType,
		userId: number,
	): Promise<TodoType> {
		console.log(data);
		return await prisma.todo.update({
			where: { id, authorId: userId },
			data,
		});
	}

	async deleteTodo(id: number, userId: number): Promise<object> {
		return await prisma.todo.delete({
			where: {
				id: id,
				authorId: userId,
			},
		});
	}
}
