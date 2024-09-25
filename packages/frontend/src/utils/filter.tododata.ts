import { TodoType } from '~typings/todo.type';

export const filterTodoData = (todo: TodoType): TodoType => {
	const {
		createdAt: _createdAt,
		updatedAt: _updatedAt,
		...filteredTodo
	} = todo;
	return filteredTodo;
};
