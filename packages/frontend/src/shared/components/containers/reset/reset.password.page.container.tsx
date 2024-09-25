/** @jsxImportSource @emotion/react */
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Card, Elevation } from '@blueprintjs/core';
import { STORAGE_KEYS } from '~shared/keys';
import { resetPasswordSchema } from '~shared/services/schemas/user.schema';
import PasswordForm from '~shared/components/forms/password/password.form';
import { PassFormData } from '~typings/forms.type';
import { authContainer } from '../login/login.page.conteiner.style';

const ResetPageContainer: React.FC = () => {
	const [searchParams] = useSearchParams();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PassFormData>({
		resolver: zodResolver(resetPasswordSchema),
		mode: 'onSubmit',
	});

	useEffect(() => {
		const token = searchParams.get('token');
		localStorage.setItem(STORAGE_KEYS.TOKEN, token);
	}, []);

	return (
		<div css={authContainer}>
			<Card elevation={Elevation.TWO} className="authCard">
				<h2 className="authTitle">Reset password</h2>
				<PasswordForm
					handleSubmit={handleSubmit}
					register={register}
					errors={errors}
					textSubmitButton="Reset password"
					type="reset"
				/>
			</Card>
		</div>
	);
};

export default ResetPageContainer;
