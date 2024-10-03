/** @jsxImportSource @emotion/react */
import React from 'react';
import { userInfoWrapper } from './Info.style';

type UserInfoProps = {
	name: string;
	email: string;
};

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
	return (
		<div css={userInfoWrapper}>
			<h3 className="title">User profile</h3>
			<p>
				Name: <span>{name}</span>
			</p>
			<hr />
			<p>
				Email: <span>{email}</span>
			</p>
			<hr />
		</div>
	);
};

export default UserInfo;
