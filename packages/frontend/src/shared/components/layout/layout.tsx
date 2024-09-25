/** @jsxImportSource @emotion/react */
import React from 'react';
import Header from '~shared/components/header/header.page';
import 'react-toastify/dist/ReactToastify.css';
import { mainStyle } from './layout.style';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			<main css={mainStyle}>{children}</main>
		</>
	);
};

export default Layout;
