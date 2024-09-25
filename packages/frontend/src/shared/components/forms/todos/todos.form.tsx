/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TodoInput from '../inputs/todos.input';
import TodosToggle from '../toggle/todos.toggle';
import { CreateTodoFormData } from '../../../../typings/forms.type';
import TodoTextarea from '../textareas/todo.textarea';
import Button from '../../button/button.component';
import { buttonWrapper, toggleWrapper } from './todos.form.style';

type TodoFormProps = {
	defaultValues?: CreateTodoFormData;
	onSubmit: SubmitHandler<CreateTodoFormData>;
	buttonText?: string;
};

const TodoForm: React.FC<TodoFormProps> = ({
	defaultValues,
	onSubmit,
	buttonText = 'Create Todo',
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm<CreateTodoFormData>({
		defaultValues,
	});

	const formData = watch();

	useEffect(() => {
		if (defaultValues) {
			reset(defaultValues);
		}
	}, [defaultValues, reset]);

	const handleToggleChange = (
		name: keyof CreateTodoFormData,
		value: boolean,
	): void => {
		setValue(name, value);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TodoInput
				name="title"
				label="Title"
				labelFor="title-input"
				helperText={errors.title && 'Title is required'}
				placeholder="Enter title"
				register={register}
				required={true}
				intent={errors.title ? 'danger' : 'none'}
				defaultValues=""
			/>

			<TodoTextarea
				label="Description"
				name="description"
				labelFor="description-input"
				helperText={errors.description && 'Description is required'}
				placeholder="Enter description"
				register={register}
				required={true}
				intent={errors.description ? 'danger' : 'none'}
				defaultValues=""
			/>

			<div>
				<div css={toggleWrapper}>
					<span>Completed:</span>
					<TodosToggle
						checked={formData.isCompleted || false}
						onChange={(checked) =>
							handleToggleChange('isCompleted', checked)
						}
					/>
				</div>
				<div css={toggleWrapper}>
					<span>Private:</span>
					<TodosToggle
						checked={formData.isPrivate || false}
						onChange={(checked) =>
							handleToggleChange('isPrivate', checked)
						}
					/>
				</div>
			</div>
			<div css={buttonWrapper}>
				<Button type="submit" text={buttonText} />
			</div>
		</form>
	);
};

export default TodoForm;
