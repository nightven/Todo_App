/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { TodoListProps } from '~typings/todo.type';
import Button from '~shared/components/button/button.component';
import { Icon } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';
import { useTodosStore } from '~store/todos.store';
import { utils } from '~/utils';
import TodosToggle from '~shared/components/forms/toggle/todos.toggle';
import { container } from '~shared/styles';
import Loader from '~shared/components/loader/loader.component';
import {
	desktopListWrapper,
	iconButtonStyles,
} from './todos.list.desktop.style';
import { useTodosHook } from '~shared/hooks/use.todos.hook';

const DesktopTodosList: React.FC<TodoListProps> = ({ todos }) => {
	const [completedTodos, setCompletedTodos] = useState<
		Record<number, boolean>
	>({});
	const { deleteTodo, updateTodo } = useTodosHook();
	const { loading } = useTodosStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (Array.isArray(todos)) {
			const initialCompletedTodos = todos.reduce(
				(acc, todo) => {
					acc[todo.id] = todo.isCompleted;
					return acc;
				},
				{} as Record<number, boolean>,
			);
			setCompletedTodos(initialCompletedTodos);
		}
	}, [todos]);

	const onViewClick = (id: number): void => {
		navigate(`/todo/${id}`);
	};

	const onEditClick = (id: number): void => {
		navigate(`/todo/edit/${id}`);
	};

	const onDeleteClick = (id: number): void => {
		deleteTodo(id);
	};

	const handleIsCompletedChange = (id: number): void => {
		const newToggleValue = !completedTodos[id];
		setCompletedTodos((prev) => ({
			...prev,
			[id]: newToggleValue,
		}));
		const todo = utils.findTodoInTodos(todos, id);
		const updatedTodo = {
			...utils.filterTodoData(todo),
			isCompleted: newToggleValue,
		};
		updateTodo(updatedTodo, todo.id);
	};

	return (
		<div css={[container, desktopListWrapper]}>
			<div className="colons">Todo Title</div>
			<div className="colons">Description</div>
			<div className="colons center">Actions</div>

			{Array.isArray(todos) && todos.length > 0 ? (
				todos.map((todo) => (
					<React.Fragment key={todo.id}>
						<div className="todoCell">{todo.title}</div>
						<div className="todoCell">{todo.description}</div>
						<div className="desktopButtonWrapper">
							<Button
								icon={<Icon icon="eye-open" />}
								type="button"
								onClick={() => onViewClick(todo.id)}
								extraButtonStyles={iconButtonStyles}
							/>
							<Button
								icon={<Icon icon="edit" />}
								type="button"
								onClick={() => onEditClick(todo.id)}
								extraButtonStyles={iconButtonStyles}
							/>
							<Button
								icon={<Icon icon="trash" />}
								type="button"
								onClick={() => onDeleteClick(todo.id)}
								extraButtonStyles={iconButtonStyles}
							/>
							{loading ? (
								<Loader size="small" />
							) : (
								<TodosToggle
									checked={completedTodos[todo.id] || false}
									onChange={() =>
										handleIsCompletedChange(todo.id)
									}
								/>
							)}
						</div>
					</React.Fragment>
				))
			) : (
				<div>No todos available</div>
			)}
		</div>
	);
};
export default DesktopTodosList;
