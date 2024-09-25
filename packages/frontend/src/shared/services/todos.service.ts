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
		searchQuery: string,
	): Promise<{ data: TodoType[]; pagination: Pagination }> {
		const query = searchQuery
			? `?title=${encodeURIComponent(searchQuery)}`
			: '';

		const res = await this.get<TodoListResponse>({
			url: `todos/all${query}`,
		});
		return { data: res.data.data, pagination: res.data.pagination };
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
