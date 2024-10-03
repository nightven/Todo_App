/** @jsxImportSource @emotion/react */
import React from 'react';
import { container } from '~shared/styles';
import Logo from '../../../../public/images/logo.png';
import { useCustomMediaQuery } from '~shared/hooks/use.custom.mediaquery';
import { headerWrapper } from './header.style';
import Button from '~shared/components/button/button.component';
import { IconNames } from '@blueprintjs/icons';
import { Icon } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useUserHook } from '~shared/hooks/use.user.hook';

const Header: React.FunctionComponent = () => {
	const { isMobile, isTablet } = useCustomMediaQuery();
	const { logOut } = useUserHook();
	const navigate = useNavigate();

	const handleLogout = (): void => {
		logOut();
		navigate(ROUTER_KEYS.LOGIN);
	};
	const handleProfile = (): void => {
		navigate(ROUTER_KEYS.PROFILE);
	};

	return (
		<div css={[headerWrapper(isTablet, isMobile), container]}>
			<div className="logo-wrapper">
				<a href={ROUTER_KEYS.HOME}>
					<img src={Logo} alt="logo" className="logo" />
				</a>

				<h1 className="title">Todo Planers</h1>
			</div>
			<div className="header-buttons">
				<Button
					icon={<Icon icon={IconNames.USER} />}
					onClick={handleProfile}
				/>
				<Button
					icon={<Icon icon={IconNames.LOG_OUT} />}
					onClick={handleLogout}
				/>
			</div>
		</div>
	);
};

export default Header;
