/** @jsxImportSource @emotion/react */
import React from 'react';
import { FormGroup } from '@blueprintjs/core';
import { TodoInputProps } from '~typings/forms.type';
import { labelStyle, textareaStyle } from './todo.textarea.style';

const TodoTextarea = React.forwardRef<HTMLInputElement, TodoInputProps>(
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
				css={labelStyle}
			>
				<textarea
					id={labelFor}
					placeholder={placeholder}
					ref={ref}
					defaultValue={defaultValues}
					{...register(name, { required })}
					css={textareaStyle(intent)}
				/>
			</FormGroup>
		);
	},
);

TodoTextarea.displayName = 'TodoTextarea';

export default TodoTextarea;
