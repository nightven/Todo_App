import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PassFormData, PassFormProps } from '~typings/forms.type';
import PasswordInput from '../inputs/password.form.imput';
import Button from '~shared/components/button/button.component';
import { useUserHook } from '~shared/hooks/use.user.hook';
import { ROUTER_KEYS } from '~shared/keys';

const PasswordForm: React.FC<PassFormProps> = ({
	handleSubmit,
	errors,
	register,
	textSubmitButton,
	type,
}) => {
	const { changePassword, resetPassword } = useUserHook();
	const navigate = useNavigate();

	const onSubmit = async (data: PassFormData): Promise<void> => {
		if (type === 'reset') {
			await resetPassword(data);

			navigate(ROUTER_KEYS.LOGIN);
		}
		if (type === 'update') {
			changePassword(data);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PasswordInput
				name="password"
				label={type === 'reset' ? 'Password' : 'Old password'}
				labelFor="password-input"
				errors={errors}
				register={register}
				placeholder="********"
				intent={errors.password ? 'danger' : 'none'}
				type="password"
			/>
			{type === 'reset' ? (
				<PasswordInput
					name="confirmPassword"
					label="Confirm Password"
					labelFor="confirm-input"
					errors={errors}
					register={register}
					placeholder="********"
					intent={errors.confirmPassword ? 'danger' : 'none'}
					type="password"
				/>
			) : (
				<PasswordInput
					name="newPassword"
					label="New Password"
					labelFor="new-input"
					errors={errors}
					register={register}
					placeholder="********"
					intent={errors.confirmPassword ? 'danger' : 'none'}
					type="password"
				/>
			)}
			<Button type="submit" text={textSubmitButton} />
		</form>
	);
};

export default PasswordForm;
