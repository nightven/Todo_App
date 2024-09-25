/** @jsxImportSource @emotion/react */
import React from 'react';
import { FormGroup } from '@blueprintjs/core';
import { TodoInputProps } from '~typings/forms.type';
import { todosInputStyle } from './inpust.style';

const TodoInput = React.forwardRef<HTMLInputElement, TodoInputProps>(
	(
		{
			label,
			labelFor,
			helperText,
			placeholder,
			register,
			name,
			required,
			intent,
			defaultValues,
		},
		ref,
	) => {
		return (
			<FormGroup
				label={label}
				labelFor={labelFor}
				helperText={helperText}
			>
				<input
					id={labelFor}
					type="text"
					placeholder={placeholder}
					ref={ref}
					defaultValue={defaultValues}
					{...register(name, { required })}
					css={todosInputStyle(intent)}
				/>
			</FormGroup>
		);
	},
);

TodoInput.displayName = 'TodoInput';

export default TodoInput;
