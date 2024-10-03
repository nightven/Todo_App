/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { FormGroup, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { InputProps } from '~typings/forms.type';
import { inputButtonStyle, inputStyle, inputWrapper } from './inpust.style';

const AuthInput: React.FC<InputProps> = ({
	label,
	labelFor,
	placeholder,
	register,
	name,
	type = 'text',
	errors,
	intent = 'none',
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPasswordField = type === 'password';

	const togglePasswordVisibility = (): void => {
		setShowPassword(!showPassword);
	};

	return (
		<FormGroup
			label={label}
			labelFor={labelFor}
			helperText={errors[name]?.message || ''}
		>
			<div css={inputWrapper}>
				<input
					id={labelFor}
					{...register(name)}
					placeholder={placeholder}
					type={
						isPasswordField && !showPassword ? 'password' : 'text'
					}
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

export default AuthInput;
