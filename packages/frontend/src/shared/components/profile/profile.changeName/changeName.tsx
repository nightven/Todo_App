/** @jsxImportSource @emotion/react */
import React from 'react';
import FormComponent from '~shared/components/forms/form/form';
import { formWrapper, title } from './changeName.style';
import { useCustomMediaQuery } from '~shared/hooks/use.custom.mediaquery';

type ChangeNameType = {
	name: string;
};

const ChangeName: React.FC<ChangeNameType> = ({ name }) => {
	const { isMobile } = useCustomMediaQuery();
	return (
		<div>
			<h3 css={title}>Edit Name</h3>
			<div css={formWrapper(isMobile)}>
				<FormComponent<ChangeNameType>
					defaultValues={{ name }}
					textSubmitButton="Submit"
					type="changeName"
				/>
			</div>
		</div>
	);
};

export default ChangeName;
