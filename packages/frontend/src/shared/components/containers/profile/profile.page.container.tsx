/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { container } from '~shared/styles';
import { Card, Elevation } from '@blueprintjs/core';
import { useUserStore } from '~store/user.store';
import {
	changeNameSchema,
	changePasswordSchema,
} from '~shared/services/schemas/user.schema';
import {
	cardWrapper,
	contentWrapper,
	pageContainer,
} from './profile.page.container.style';
import { useUserHook } from '~shared/hooks/use.user.hook';
import { useCustomMediaQuery } from '~shared/hooks/use.custom.mediaquery';
import UserInfo from '~shared/components/profile/profile.info/info';
import ChangeName from '~shared/components/profile/profile.changeName/changeName';
import ChangePassword from '~shared/components/profile/profile.changePassword/changePassword';
import Sidebar from '~shared/components/profile/profile.sidebar/sidebar';

const ProfilePageContainer: React.FC = () => {
	const { profile: user } = useUserStore();
	const { getProfile } = useUserHook();
	const [activeSection, setActiveSection] = useState<
		'info' | 'editName' | 'changePassword'
	>('info');

	const { isMobile } = useCustomMediaQuery();

	useEffect(() => {
		getProfile();
	}, []);

	const handleSectionChange = (
		section: 'info' | 'editName' | 'changePassword',
	): void => {
		setActiveSection(section);
	};

	const renderContent = (): JSX.Element | null => {
		if (activeSection === 'info')
			return <UserInfo name={user?.name} email={user?.email} />;
		if (activeSection === 'editName')
			return (
				<ChangeName
					name={user?.name}
					isMobile={isMobile}
					schema={changeNameSchema}
				/>
			);
		if (activeSection === 'changePassword')
			return (
				<ChangePassword
					isMobile={isMobile}
					schema={changePasswordSchema}
				/>
			);
		return null;
	};

	return (
		<aside css={[container, pageContainer(isMobile)]}>
			<Sidebar
				handleSectionChange={handleSectionChange}
				isMobile={isMobile}
				activeSection={activeSection}
			/>

			<section css={contentWrapper}>
				<Card elevation={Elevation.TWO} css={cardWrapper(isMobile)}>
					{renderContent()}
				</Card>
			</section>
		</aside>
	);
};

export default ProfilePageContainer;
