/** @jsxImportSource @emotion/react */
import React from 'react';
import PasswordForm from '~shared/components/forms/password/password.form';
import { UseFormRegister, FieldErrors, SubmitHandler } from 'react-hook-form';
import { FormData, PassFormData } from '~typings/forms.type';
import { changePasswordContainer } from './changePassword.style';

type ChangePasswordType = {
	handleSubmit: (
		callback: SubmitHandler<FormData>,
	) => (e?: React.BaseSyntheticEvent) => void;
	errors: FieldErrors<PassFormData>;
	register: UseFormRegister<PassFormData>;
	isMobile: boolean;
};

const ChangePassword: React.FC<ChangePasswordType> = ({
	handleSubmit,
	errors,
	register,
	isMobile,
}) => {
	return (
		<div css={changePasswordContainer(isMobile)}>
			<PasswordForm
				handleSubmit={handleSubmit}
				errors={errors}
				register={register}
				textSubmitButton="Save password"
				type="update"
			/>
		</div>
	);
};

export default ChangePassword;
