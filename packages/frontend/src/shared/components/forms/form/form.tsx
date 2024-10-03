/** @jsxImportSource @emotion/react */
import React from 'react';
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form';
import Input from '../inputs/input';
import { useUserHook } from '~shared/hooks/use.user.hook';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import Button from '../../button/button.component';
import {
	ChangeNameType,
	ChangePassType,
	LoginUserType,
	RegisterUserType,
	ResetEmail,
	ResetPassword,
} from '~typings/user.type';
import { formStyle } from './form.style';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

type FormPropsType<T extends Record<string, unknown>> = {
	defaultValues?: DefaultValues<T>;
	textSubmitButton?: string;
	type:
		| 'login'
		| 'register'
		| 'forgot'
		| 'reset'
		| 'changePassword'
		| 'changeName';
	onBack?: () => void;
	schema: z.ZodSchema;
};

type FormType = {
	name?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	oldPassword?: string;
	newPassword?: string;
};

const FormComponent = <T extends FormType>({
	defaultValues,
	textSubmitButton = 'Submit',
	type,
	onBack,
	schema,
}: FormPropsType<T>): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<T>({
		defaultValues,
		resolver: zodResolver(schema),
		mode: 'onSubmit',
	});

	const {
		registerUser,
		login,
		forgotPassword,
		resetPassword,
		changePassword,
		changeUsername,
	} = useUserHook();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<T> = async (data: T): Promise<void> => {
		if (type === 'login') {
			await login(data as LoginUserType).then(() =>
				navigate(ROUTER_KEYS.HOME),
			);
		}
		if (type === 'register') {
			await registerUser(data as RegisterUserType).then(() =>
				navigate(ROUTER_KEYS.HOME),
			);
		}
		if (type === 'forgot') {
			await forgotPassword(data as ResetEmail);
		}
		if (type === 'reset') {
			await resetPassword(data as ResetPassword);
			navigate(ROUTER_KEYS.LOGIN);
		}
		if (type === 'changePassword') {
			await changePassword(data as ChangePassType);
		}
		if (type === 'changeName') {
			await changeUsername(data as ChangeNameType);
		}
	};

	const renderInputs = (type): JSX.Element => {
		if (type === 'login') {
			return (
				<>
					<Input<T>
						name="email"
						label="Email"
						labelFor="email-input"
						errors={errors}
						register={register}
						placeholder="Enter your email"
						intent={errors.email ? 'danger' : 'none'}
					/>
					<Input<T>
						name="password"
						label="Password"
						labelFor="password-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.password ? 'danger' : 'none'}
					/>
				</>
			);
		}

		if (type === 'register') {
			return (
				<>
					<Input<T>
						name="name"
						label="Name"
						labelFor="name-input"
						errors={errors}
						register={register}
						placeholder="Enter your name"
						intent={errors.name ? 'danger' : 'none'}
					/>
					<Input<T>
						name="email"
						label="Email"
						labelFor="email-input"
						errors={errors}
						register={register}
						placeholder="Enter your email"
						intent={errors.email ? 'danger' : 'none'}
					/>
					<Input<T>
						name="password"
						label="Password"
						labelFor="password-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.password ? 'danger' : 'none'}
					/>
					<Input<T>
						name="confirmPassword"
						label="Confirm Password"
						labelFor="confirm-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.confirmPassword ? 'danger' : 'none'}
					/>
				</>
			);
		}

		if (type === 'forgot') {
			return (
				<>
					<Input<T>
						name="email"
						label="Email"
						labelFor="email-input"
						errors={errors}
						register={register}
						placeholder="Enter your email"
						intent={errors.email ? 'danger' : 'none'}
					/>
				</>
			);
		}

		if (type === 'reset') {
			return (
				<>
					<Input<T>
						name="password"
						label={type === 'reset' ? 'Password' : 'Old password'}
						labelFor="password-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.password ? 'danger' : 'none'}
					/>
					<Input<T>
						name="confirmPassword"
						label="Confirm Password"
						labelFor="confirm-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.confirmPassword ? 'danger' : 'none'}
					/>
				</>
			);
		}

		if (type === 'changePassword') {
			return (
				<>
					<Input<T>
						name="password"
						label={type === 'reset' ? 'Password' : 'Old password'}
						labelFor="password-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.password ? 'danger' : 'none'}
					/>
					<Input<T>
						name="newPassword"
						label="New Password"
						labelFor="new-input"
						errors={errors}
						register={register}
						placeholder="********"
						type="password"
						intent={errors.newPassword ? 'danger' : 'none'}
					/>
				</>
			);
		}

		if (type === 'changeName') {
			return (
				<>
					<Input<T>
						name="name"
						label="Name"
						labelFor="name-input"
						errors={errors}
						register={register}
						placeholder="Enter your name"
						intent={errors.name ? 'danger' : 'none'}
						required
					/>
				</>
			);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
			{renderInputs(type)}
			<div className="buttonWrapper">
				{onBack && (
					<Button type="button" text="Back" onClick={onBack} />
				)}
				<Button type="submit" text={textSubmitButton} />
			</div>
		</form>
	);
};

export default FormComponent;
