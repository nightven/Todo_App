import { toast } from 'react-toastify';
import todosService from '~shared/services/todos.service';
import { useTodosStore } from '~store/todos.store';
import { TodoType } from '~typings/todo.type';

interface UseTodosHookReturn {
	updateTodo: (updatedToDo: TodoType, id: number) => Promise<void>;
	createTodo: (todo: TodoType) => Promise<void>;
	getViewTodo: (id: string) => Promise<void>;
	getTodos: (searchQuery: string) => Promise<void>;
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
		setError,
		setViewedTodo,
	} = useTodosStore();

	const getTodos = async (searchQuery: string): Promise<void> => {
		setLoading(true);

		try {
			const { data, pagination } =
				await todosService.getTodos(searchQuery);

			setTodos(data);
			setPagination(pagination);
			setHasMore(pagination.next ? true : false);
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

			setTodos([...todos, todo]);
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
	return { getTodos, getViewTodo, updateTodo, createTodo, deleteTodo };
};
