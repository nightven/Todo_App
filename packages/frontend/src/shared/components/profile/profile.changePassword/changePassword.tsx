/** @jsxImportSource @emotion/react */
import React from 'react';
import { changePasswordContainer, title } from './changePassword.style';
import FormComponent from '~shared/components/forms/form/form';
import { ChangePassType } from '~typings/user.type';
import { z } from 'zod';

type ChangePasswordProps = {
	isMobile: boolean;
	schema: z.ZodSchema;
};

const ChangePassword: React.FC<ChangePasswordProps> = ({
	isMobile,
	schema,
}) => {
	return (
		<div>
			<h3 css={title}>Change password</h3>
			<div css={changePasswordContainer(isMobile)}>
				<FormComponent<ChangePassType>
					type="changePassword"
					textSubmitButton="Change password"
					schema={schema}
				/>
			</div>
		</div>
	);
};

export default ChangePassword;
