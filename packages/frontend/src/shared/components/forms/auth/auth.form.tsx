/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '~shared/components/button/button.component';
import { authForm } from './auth.form.style';
import AuthInput from '../inputs/auth.form.input';
import { AuthFormProps } from '~typings/forms.type';
import {
	LoginUserType,
	RegisterUserType,
	ResetEmail,
} from '~typings/user.type';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useUserHook } from '~shared/hooks/use.user.hook';

interface AuthFormData {
	name?: string;
	email: string;
	password?: string;
	confirmPassword?: string;
	newPassword?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
	handleSubmit,
	errors,
	register,
	textSubmitButton,
	onBack,
	type,
}) => {
	const { registerUser, login, forgotPassword } = useUserHook();
	const navigate = useNavigate();

	const onSubmit = async (data: AuthFormData): Promise<void> => {
		if (type === 'register') {
			await registerUser(data as RegisterUserType).then(() =>
				navigate(ROUTER_KEYS.HOME),
			);
		} else if (type === 'login') {
			await login(data as LoginUserType).then(() =>
				navigate(ROUTER_KEYS.HOME),
			);
		} else if (type === 'forgot') {
			forgotPassword(data as ResetEmail);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} css={authForm}>
			{type === 'register' && (
				<AuthInput
					name="name"
					label="Name"
					labelFor="name-input"
					errors={errors}
					register={register}
					placeholder="Enter your name"
					intent={errors.name ? 'danger' : 'none'}
				/>
			)}

			<AuthInput
				name="email"
				label="Email"
				labelFor="email-input"
				errors={errors}
				register={register}
				placeholder="Enter your email"
				intent={errors.email ? 'danger' : 'none'}
			/>
			{type !== 'forgot' && (
				<AuthInput
					name="password"
					label="Password"
					labelFor="password-input"
					errors={errors}
					register={register}
					placeholder="********"
					intent={errors.password ? 'danger' : 'none'}
					type="password"
				/>
			)}
			{type === 'register' && (
				<AuthInput
					name="confirmPassword"
					label="Confirm Password"
					labelFor="confirm-input"
					errors={errors}
					register={register}
					placeholder="********"
					intent={errors.confirmPassword ? 'danger' : 'none'}
					type="password"
				/>
			)}

			<Button type="submit" text={textSubmitButton} />
			<Button type="button" text="Back" onClick={onBack} />
		</form>
	);
};

export default AuthForm;
