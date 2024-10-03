/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import { FormGroup, Button, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { inputButtonStyle, inputStyle, inputWrapper } from './inpust.style';

type InputType<T> = {
	label: string;
	labelFor: string;
	placeholder: string;
	errors: FieldErrors<T>;
	register: UseFormRegister<T>;
	name:
		| 'name'
		| 'email'
		| 'password'
		| 'confirmPassword'
		| 'oldPassword'
		| 'newPassword';
	type?: 'text' | 'password';
	required?: boolean;
	intent?: Intent;
};

const Input = <T,>({
	label,
	labelFor,
	placeholder,
	errors,
	register,
	name,
	type,
	required,
	intent,
}: InputType<T>): JSX.Element => {
	const [showPassword, setShowPassword] = useState(false);
	const isPasswordField = type === 'password';

	const togglePasswordVisibility = (): void => {
		setShowPassword(!showPassword);
	};

	return (
		<FormGroup
			label={label}
			labelFor={labelFor}
			helperText={
				errors[name]?.message ? String(errors[name]?.message) : ''
			}
		>
			<div css={inputWrapper}>
				<input
					id={labelFor}
					{...register(name as unknown as Path<T>)}
					placeholder={placeholder}
					type={
						isPasswordField && !showPassword ? 'password' : 'text'
					}
					required={required}
					css={inputStyle(intent)}
				/>
				{isPasswordField && (
					<Button
						icon={
							showPassword
								? IconNames.EYE_OPEN
								: IconNames.EYE_OFF
						}
						minimal
						onClick={togglePasswordVisibility}
						css={inputButtonStyle}
					/>
				)}
			</div>
		</FormGroup>
	);
};

export default Input;
