import {
	Pagination,
	TodoListResponse,
	TodoResType,
	TodoType,
} from '~typings/todo.type';
import HttpService from './http.service';
import { ResMsgType } from '~typings/user.type';

class TodoService extends HttpService {
	constructor() {
		super();
	}

	async getTodos(
		title: string,
		page: number,
	): Promise<{
		data: TodoType[];
		pagination: Pagination;
		totalPages: number;
	}> {
		const params = new URLSearchParams();
		if (title) params.set('title', encodeURIComponent(title));
		params.set('page', String(page));

		const res = await this.get<TodoListResponse>({
			url: `todos/all?${params.toString()}`,
		});
		return {
			data: res.data.data,
			pagination: res.data.pagination,
			totalPages: res.data.totalPages,
		};
	}

	async getTodoById(id: string): Promise<TodoType> {
		const res = await this.get<TodoResType>({ url: `todos/${id}` }, true);
		return res.data.data;
	}

	async deleteToDo(id: number): Promise<ResMsgType> {
		const res = await this.delete<ResMsgType>({ url: `todos/${id}` }, true);
		return res.data;
	}

	async updateToDo(todo: TodoType, id: number): Promise<TodoType> {
		const res = await this.put<TodoType>(
			{ url: `todos/${id}`, data: todo },
			true,
		);
		return res.data;
	}

	async addTodo(todo: TodoType): Promise<TodoType> {
		const res = await this.post<TodoType>(
			{ url: 'todos/create', data: todo },
			true,
		);
		return res.data;
	}
}

export default new TodoService();
