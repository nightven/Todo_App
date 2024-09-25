/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { authContainer } from './login.page.conteiner.style';
import Button from '~shared/components/button/button.component';
import { useForm } from 'react-hook-form';
import AuthForm from '~shared/components/forms/auth/auth.form';
import { FormData, FormState } from '~typings/forms.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSchema } from '~/utils/get.form.schema';

const LoginContainer: React.FC = () => {
	const [formState, setFormState] = useState<FormState>('initial');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(getSchema(formState)),
		mode: 'onSubmit',
	});

	const renderForm = (): React.ReactNode => {
		switch (formState) {
			case 'login':
				return (
					<AuthForm
						handleSubmit={handleSubmit}
						register={register}
						errors={errors}
						textSubmitButton="Login"
						type="login"
						onBack={() => setFormState('initial')}
					/>
				);
			case 'register':
				return (
					<AuthForm
						handleSubmit={handleSubmit}
						register={register}
						errors={errors}
						textSubmitButton="Register now"
						type="register"
						onBack={() => setFormState('initial')}
					/>
				);
			case 'forgot':
				return (
					<AuthForm
						handleSubmit={handleSubmit}
						register={register}
						errors={errors}
						textSubmitButton="Send reset  email"
						type="forgot"
						onBack={() => setFormState('initial')}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div css={authContainer}>
			<Card elevation={Elevation.TWO} className="authCard">
				<h2 className="authTitle">Todos Planner</h2>

				{formState === 'initial' && (
					<div className="buttonWrapper">
						<Button
							text="LogIn"
							type="button"
							onClick={() => setFormState('login')}
						/>
						<Button
							text="Register"
							type="button"
							onClick={() => setFormState('register')}
						/>
						<Button
							text="Forgot Password?"
							type="button"
							isLinkStyle
							onClick={() => setFormState('forgot')}
						/>
					</div>
				)}

				{formState !== 'initial' && renderForm()}
			</Card>
		</div>
	);
};

export default LoginContainer;
