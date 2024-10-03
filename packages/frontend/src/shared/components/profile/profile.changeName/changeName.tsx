/** @jsxImportSource @emotion/react */
import React from 'react';
import FormComponent from '~shared/components/forms/form/form';
import { formWrapper, title } from './changeName.style';
import { ChangeNameType } from '~typings/user.type';
import z from 'zod';

type ChangeNameProps = {
	name: string;
	isMobile: boolean;
	schema: z.ZodSchema;
};

const ChangeName: React.FC<ChangeNameProps> = ({ name, isMobile, schema }) => {
	return (
		<div>
			<h3 css={title}>Edit Name</h3>
			<div css={formWrapper(isMobile)}>
				<FormComponent<ChangeNameType>
					defaultValues={{ name }}
					textSubmitButton="Submit"
					type="changeName"
					schema={schema}
				/>
			</div>
		</div>
	);
};

export default ChangeName;
