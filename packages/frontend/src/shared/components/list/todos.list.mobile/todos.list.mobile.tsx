/** @jsxImportSource @emotion/react */
import React from 'react';
import { TodoListProps, TodoType } from '~typings/todo.type';
import TodoItem from '../item/todo.item';
import { listMobile } from './todo.list.mobile.style';

const TodoListMobile: React.FC<TodoListProps> = ({
	todos,
	lastTodoElementRef,
}) => {
	return (
		<ul css={listMobile}>
			{todos.map((todo: TodoType, index: number): React.ReactNode => {
				const isLastItem = index === todos.length - 1;

				return (
					<li
						key={`${index}-${todo.title}`}
						ref={isLastItem ? lastTodoElementRef : null}
					>
						<TodoItem id={todo.id} />
					</li>
				);
			})}
		</ul>
	);
};

export default TodoListMobile;
