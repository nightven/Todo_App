import { FilterType } from '~typings/filter.type';
import { TodoType } from '~typings/todo.type';

export const filterTodos = (
	todos: TodoType[],
	activeFilter: FilterType,
): TodoType[] => {
	return todos.filter((todo) => {
		if (activeFilter === 'All') return true;
		if (activeFilter === 'Private') return todo.isPrivate;
		if (activeFilter === 'Public') return !todo.isPrivate;
		if (activeFilter === 'Completed') return todo.isCompleted;
		return true;
	});
};
