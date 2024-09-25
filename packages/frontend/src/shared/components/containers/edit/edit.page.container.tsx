/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodosStore } from '~store/todos.store';
import { CreateTodoFormData } from '~typings/forms.type';
import { SubmitHandler } from 'react-hook-form';
import TodoForm from '~shared/components/forms/todos/todos.form';
import Button from '~shared/components/button/button.component';
import { utils } from '~/utils';
import { container } from '~shared/styles';
import { editPageWrapper } from './edit.page.container.style';
import { useTodosHook } from '~shared/hooks/use.todos.hook';

const EditPageContainer: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { todos } = useTodosStore();
	const { updateTodo } = useTodosHook();
	const navigate = useNavigate();

	const todo = utils.findTodoInTodos(todos, Number(id));

	if (!todo) {
		return <p>Todo not found</p>;
	}

	const onSubmit: SubmitHandler<CreateTodoFormData> = (data) => {
		updateTodo(data, parseInt(id));
	};
	const onBackClick = (): void => {
		navigate(-1);
	};

	return (
		<div css={[editPageWrapper, container]}>
			<h1>Edit Todo</h1>
			<div className="backButtonWrapper">
				<Button type="submit" text={'Back'} onClick={onBackClick} />
			</div>

			<TodoForm
				defaultValues={{
					title: todo.title,
					description: todo.description,
					isCompleted: todo.isCompleted,
					isPrivate: todo.isPrivate,
				}}
				onSubmit={onSubmit}
				buttonText="Update Todo"
			/>
		</div>
	);
};

export default EditPageContainer;
