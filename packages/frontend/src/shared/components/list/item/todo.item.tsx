/** @jsxImportSource @emotion/react */
import { Card, Elevation } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { utils } from '~/utils';
import Button from '~shared/components/button/button.component';
import TodosToggle from '~shared/components/forms/toggle/todos.toggle';
import { container } from '~shared/styles';
import { useTodosStore } from '~store/todos.store';
import { Icon } from '@blueprintjs/core';
import Loader from '~shared/components/loader/loader.component';
import { iconButtonStyles, todoWrapper } from './todo.item.style';
import { useTodosHook } from '~shared/hooks/use.todos.hook';

interface TodoItemProps {
	id?: number;
	tablet?: boolean;
	desktop?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id: propId, tablet }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const { id: paramId } = useParams<{ id: string }>();
	const [toggleIsCompleted, setToggleIsCompleted] = useState(false);
	const [toggleIsPrivate, setToggleIsPrivate] = useState(false);
	const { todos, loading } = useTodosStore();
	const { updateTodo, deleteTodo } = useTodosHook();
	const todoId = propId || Number(paramId);

	const todo = utils.findTodoInTodos(todos, todoId);

	useEffect(() => {
		if (todo) {
			setToggleIsCompleted(todo.isCompleted);
			setToggleIsPrivate(todo.isPrivate);
		}
	}, [todo]);

	const handleIsCompletedChange = (): void => {
		const newToggleValue = !toggleIsCompleted;
		setToggleIsCompleted(newToggleValue);

		if (todo) {
			const updatedTodo = {
				...utils.filterTodoData(todo),
				isCompleted: newToggleValue,
			};
			updateTodo(updatedTodo, todo.id);
		}
	};

	const handleIsPrivateChange = (): void => {
		const newToggleValue = !toggleIsPrivate;
		setToggleIsPrivate(newToggleValue);

		if (todo) {
			const updatedTodo = {
				...utils.filterTodoData(todo),
				isPrivate: newToggleValue,
			};
			updateTodo(updatedTodo, todo.id);
		}
	};

	const onViewClick = (): void => {
		navigate(`/todo/${todoId}`);
	};

	const onDeleteClick = (): void => {
		if (todo) {
			deleteTodo(todo.id);
		}
	};

	return todo ? (
		<div css={[container, todoWrapper(tablet)]}>
			<Card elevation={Elevation.TWO} className="cardStyle">
				<div>
					<h1>
						<span>Todo: </span>
						{todo.title}
					</h1>
					<h3>Description</h3>
					<p>{todo.description}</p>
				</div>

				<div>
					<div className="allButtonWrapper">
						<span>
							<b>Completed</b>
						</span>
						{loading ? (
							<Loader height="30px" width="30px" />
						) : (
							<TodosToggle
								checked={toggleIsCompleted}
								onChange={handleIsCompletedChange}
							/>
						)}

						{location.pathname !== '/' && (
							<>
								<span>
									<b>Private</b>
								</span>
								{loading ? (
									<Loader height="30px" width="30px" />
								) : (
									<TodosToggle
										checked={toggleIsPrivate}
										onChange={handleIsPrivateChange}
									/>
								)}
							</>
						)}
					</div>

					{location.pathname !== '/' ? (
						<Button
							text="Back"
							type="button"
							onClick={() => navigate(-1)}
						/>
					) : (
						<div className="changeButtonWrapper">
							<Button
								icon={<Icon icon="eye-open" />}
								type="button"
								onClick={onViewClick}
								extraButtonStyles={iconButtonStyles}
							/>
							<Button
								icon={<Icon icon="edit" />}
								type="button"
								onClick={() => navigate(`/todo/edit/${todoId}`)}
								extraButtonStyles={iconButtonStyles}
							/>
							<Button
								icon={<Icon icon="trash" />}
								type="button"
								onClick={onDeleteClick}
								extraButtonStyles={iconButtonStyles}
							/>
						</div>
					)}
				</div>
			</Card>
		</div>
	) : (
		<p>Todo not found</p>
	);
};

export default TodoItem;
