import { TodoType } from '~typings/todo.type';

export const findTodoInTodos = (todos: TodoType[], id: number): TodoType => {
	return todos.find((todo) => todo.id === id);
};
