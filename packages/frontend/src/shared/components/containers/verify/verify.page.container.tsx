/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { verifyPageContainer } from './verify.page.container.style';
import Loader from '~shared/components/loader/loader.component';
import { ROUTER_KEYS } from '~shared/keys';
import useUserStore from '~store/user.store';
import { useUserHook } from '~shared/hooks/use.user.hook';

const VerifyPageContainer: React.FC = () => {
	const { loading } = useUserStore();
	const { verifyEmail } = useUserHook();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		const verificationToken = searchParams.get('token');

		verifyEmail(verificationToken);

		navigate(ROUTER_KEYS.LOGIN);
	}, []);

	return (
		<div css={verifyPageContainer}>
			{loading && <Loader size="large" />}
		</div>
	);
};

export default VerifyPageContainer;
