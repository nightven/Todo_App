/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { authContainer } from './login.page.conteiner.style';
import Button from '~shared/components/button/button.component';
import FormComponent from '~shared/components/forms/form/form';
import {
	forgotPasswordSchema,
	loginSchema,
	registrationSchema,
} from '~shared/services/schemas/user.schema';
import { LoginUserType, ResetEmail } from '~typings/user.type';
import { FormState } from '~typings/forms.type';

const LoginContainer: React.FC = () => {
	const [formState, setFormState] = useState<FormState>('initial');

	const renderForm = (): React.ReactNode => {
		switch (formState) {
			case 'login':
				return (
					<FormComponent<LoginUserType>
						onBack={() => setFormState('initial')}
						type="login"
						schema={loginSchema}
						textSubmitButton="Login"
					/>
				);
			case 'register':
				return (
					<FormComponent<LoginUserType>
						onBack={() => setFormState('initial')}
						type="register"
						schema={registrationSchema}
						textSubmitButton="Register now"
					/>
				);
			case 'forgot':
				return (
					<FormComponent<ResetEmail>
						onBack={() => setFormState('initial')}
						type="forgot"
						schema={forgotPasswordSchema}
						textSubmitButton="Send reset email"
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
