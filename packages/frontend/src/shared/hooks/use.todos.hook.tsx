import { toast } from 'react-toastify';
import todosService from '~shared/services/todos.service';
import { useTodosStore } from '~store/todos.store';
import { TodoType } from '~typings/todo.type';

interface UseTodosHookReturn {
	updateTodo: (updatedToDo: TodoType, id: number) => Promise<void>;
	createTodo: (todo: TodoType) => Promise<void>;
	getViewTodo: (id: string) => Promise<void>;
	getTodos: (title: string, page: number) => Promise<void>;
	loadMore: (title: string, page: number) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;
}
export const useTodosHook = (): UseTodosHookReturn => {
	const {
		todos,
		viewedTodo,
		setHasMore,
		setTodos,
		setLoading,
		setPagination,
		setTotalPages,
		setError,
		setViewedTodo,
	} = useTodosStore();

	const getTodos = async (title: string, page: number): Promise<void> => {
		setLoading(true);

		try {
			const { data, pagination, totalPages } =
				await todosService.getTodos(title, page);

			setTodos(data);
			setPagination(pagination);
			setTotalPages(totalPages);
			setHasMore(pagination.next ? true : false);
			setError(null);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to fetch todos');
		}
	};

	const loadMore = async (title: string, page: number): Promise<void> => {
		setLoading(true);

		try {
			const { data, pagination, totalPages } =
				await todosService.getTodos(title, page);
			setTodos([...todos, ...data]);
			setPagination(pagination);
			setTotalPages(totalPages);
			setHasMore(!!pagination.next);
			setError(null);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to fetch todos');
		}
	};

	const getViewTodo = async (id: string): Promise<void> => {
		setLoading(true);
		try {
			const todo = await todosService.getTodoById(id);
			setViewedTodo(todo);
			setError(null);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to fetch todo');
		}
	};

	const updateTodo = async (
		updatedToDo: TodoType,
		id: number,
	): Promise<void> => {
		setLoading(true);
		try {
			const updatedTodo = await todosService.updateToDo(updatedToDo, id);

			setViewedTodo({ ...viewedTodo, ...updatedTodo });
			setTodos([
				...todos.map((todo) =>
					todo.id === id ? { ...todo, ...updatedToDo } : todo,
				),
			]);
			setError(null);
			setLoading(false);
			toast.success('Todo has been updated successfully!');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to fetch todo');
		}
	};

	const createTodo = async (todo: TodoType): Promise<void> => {
		setLoading(true);
		try {
			await todosService.addTodo(todo);

			setError(null);
			setLoading(false);
			toast.success('Todo has been created successfully!');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('Failed to create todo');
		}
	};

	const deleteTodo = async (id: number): Promise<void> => {
		setLoading(true);

		try {
			await todosService.deleteToDo(id);

			setTodos(todos.filter((todo) => todo.id !== id));
			setError(null);
			setLoading(false);
			toast.success('Todo has been deleted successfully!');
		} catch (error) {
			setError(error.message);
			setLoading(false);
			toast.error('failed to delete todo');
		}
	};
	return {
		getTodos,
		getViewTodo,
		updateTodo,
		createTodo,
		deleteTodo,
		loadMore,
	};
};
