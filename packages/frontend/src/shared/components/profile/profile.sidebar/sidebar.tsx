/** @jsxImportSource @emotion/react */
import React from 'react';
import { activeMenuItem, menuItem, sidebarWrapper } from './sidebar.style';

type SectionType = 'info' | 'editName' | 'changePassword';

type SidebarPopsType = {
	handleSectionChange: (section: SectionType) => void;
	isMobile: boolean;
	activeSection: SectionType;
};

const Sidebar: React.FC<SidebarPopsType> = ({
	isMobile,
	activeSection,
	handleSectionChange,
}) => {
	return (
		<div css={sidebarWrapper(isMobile)}>
			<p
				css={activeSection === 'info' ? activeMenuItem : menuItem}
				onClick={() => handleSectionChange('info')}
			>
				User Info
			</p>
			<p
				css={activeSection === 'editName' ? activeMenuItem : menuItem}
				onClick={() => handleSectionChange('editName')}
			>
				Change Name
			</p>
			<p
				css={
					activeSection === 'changePassword'
						? activeMenuItem
						: menuItem
				}
				onClick={() => handleSectionChange('changePassword')}
			>
				Change Password
			</p>
		</div>
	);
};

export default Sidebar;
