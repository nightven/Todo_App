/** @jsxImportSource @emotion/react */
import React from 'react';
import { TodoListProps } from '~typings/todo.type';
import { useCustomMediaQuery } from '~shared/hooks/use.custom.mediaquery';
import TodoListMobile from './todos.list.mobile/todos.list.mobile';
import DesktopTodosList from './todos.list.desktop/todos.list.desktop';

const TodosList: React.FC<TodoListProps> = ({ todos, lastTodoElementRef }) => {
	const { isDesktop, isTablet, isMobile } = useCustomMediaQuery();

	if (isMobile)
		return (
			<TodoListMobile
				todos={todos}
				lastTodoElementRef={lastTodoElementRef}
			/>
		);
	if (isTablet || isDesktop) return <DesktopTodosList todos={todos} />;
};

export default TodosList;
