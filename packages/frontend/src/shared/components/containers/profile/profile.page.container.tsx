/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { container } from '~shared/styles';
import { Card, Elevation, Collapse } from '@blueprintjs/core';
import { useUserStore } from '~store/user.store';
import Button from '~shared/components/button/button.component';
import PasswordForm from '~shared/components/forms/password/password.form';
import { PassFormData } from '~typings/forms.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { changePasswordSchema } from '~shared/services/schemas/user.schema';
import {
	collapseContainer,
	profileWrapper,
} from './profile.page.container.style';
import { useUserHook } from '~shared/hooks/use.user.hook';

const ProfilePageContainer: React.FC = () => {
	const { profile: user } = useUserStore();
	const { getProfile } = useUserHook();
	const [isOpen, setIsOpen] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PassFormData>({
		resolver: zodResolver(changePasswordSchema),
		mode: 'onSubmit',
	});

	useEffect(() => {
		getProfile();
	}, []);

	const handleToggleCollapse = (): void => setIsOpen(!isOpen);

	return (
		<div css={container}>
			<Card elevation={Elevation.TWO} css={profileWrapper}>
				{user && (
					<div>
						<p>
							Name: <span>{user.name}</span>
						</p>
						<p>
							Email: <span>{user.email}</span>
						</p>
					</div>
				)}

				<Button
					isLinkStyle
					onClick={handleToggleCollapse}
					text="Change password"
				/>

				<Collapse isOpen={isOpen}>
					<div css={collapseContainer}>
						<PasswordForm
							handleSubmit={handleSubmit}
							errors={errors}
							register={register}
							textSubmitButton="Save password"
							type="update"
						/>
					</div>
				</Collapse>
			</Card>
		</div>
	);
};

export default ProfilePageContainer;
