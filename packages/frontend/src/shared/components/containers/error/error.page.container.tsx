/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~shared/components/button/button.component';
import { ROUTER_KEYS } from '~shared/keys';
import { errorWrapper } from './error.page.container.style';

const ErrorPageContainer: React.FC = () => {
	const navigate = useNavigate();

	const handleGoHome = (): void => {
		navigate(ROUTER_KEYS.HOME);
	};

	return (
		<div css={errorWrapper}>
			<h1>Something went wrong!</h1>
			<p>Please,reload page or go to home.</p>

			<Button text="Home" type="button" onClick={handleGoHome} />
		</div>
	);
};

export default ErrorPageContainer;
