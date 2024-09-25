/** @jsxImportSource @emotion/react */
import React from 'react';
import { TodoListProps, TodoType } from '~typings/todo.type';
import TodoItem from '../item/todo.item';
import { listMobile } from './todo.list.mobile.style';

const TodoListMobile: React.FC<TodoListProps> = ({ todos }) => {
	return (
		<ul css={listMobile}>
			{todos.map(
				(todo: TodoType, index: number): React.ReactNode => (
					<li key={`${index}-${todo.title}`}>
						<TodoItem id={todo.id} />
					</li>
				),
			)}
		</ul>
	);
};

export default TodoListMobile;
