/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, Elevation } from '@blueprintjs/core';
import { STORAGE_KEYS } from '~shared/keys';
import { resetPasswordSchema } from '~shared/services/schemas/user.schema';
import { authContainer } from '../login/login.page.conteiner.style';
import FormComponent from '~shared/components/forms/form/form';
import { ResetPassword } from '~typings/user.type';

const ResetPageContainer: React.FC = () => {
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const token = searchParams.get('token');
		localStorage.setItem(STORAGE_KEYS.TOKEN, token);
	}, []);

	return (
		<div css={authContainer}>
			<Card elevation={Elevation.TWO} className="authCard">
				<h2 className="authTitle">Reset password</h2>
				<FormComponent<ResetPassword>
					type="reset"
					schema={resetPasswordSchema}
					textSubmitButton="Reset password"
				/>
			</Card>
		</div>
	);
};

export default ResetPageContainer;
