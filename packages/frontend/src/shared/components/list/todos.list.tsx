/** @jsxImportSource @emotion/react */
import React from 'react';
import { TodoListProps } from '~typings/todo.type';
import { useCustomTheme } from '~shared/hooks/use.custom.theme';
import TodoListMobile from './todos.list.mobile/todos.list.mobile';
import DesktopTodosList from './todos.list.desktop/todos.list.desktop';

const TodosList: React.FC<TodoListProps> = ({ todos }) => {
	const { isDesktop, isTablet, isMobile } = useCustomTheme();

	if (isMobile) return <TodoListMobile todos={todos} />;
	if (isTablet || isDesktop) return <DesktopTodosList todos={todos} />;
};

export default TodosList;
