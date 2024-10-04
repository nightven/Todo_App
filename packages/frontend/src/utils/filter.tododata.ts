import { TodoType } from '~typings/todo.type';

export const filterTodoData = (todo: TodoType): TodoType => {
	const { ...filteredTodo } = todo;
	return filteredTodo;
};
