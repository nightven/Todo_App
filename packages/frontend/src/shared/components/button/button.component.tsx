/** @jsxImportSource @emotion/react */
import * as React from 'react';
import Loader from '../loader/loader.component';
import { css } from '@emotion/react';

import { btnContentWrapper, btnStyles, iconWrapper, mr } from './button.styles';

type IButtonProps = {
	text?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	extraButtonStyles?: ReturnType<typeof css>;
	icon?: React.ReactNode;
	isLinkStyle?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = ({
	text,
	type = 'submit',
	onClick,
	loading,
	disabled,
	extraButtonStyles,
	icon,
	isLinkStyle,
}) => {
	const isDisabled = Boolean(loading ?? disabled);

	const handleClick = (): void => {
		if (isDisabled) {
			return;
		}

		onClick?.();
	};

	return (
		<button
			disabled={isDisabled}
			type={type}
			onClick={handleClick}
			css={[btnStyles(Boolean(disabled), isLinkStyle), extraButtonStyles]}
		>
			{Boolean(loading) ? (
				<Loader height="30px" width="30px" />
			) : (
				<span css={btnContentWrapper}>
					{icon && (
						<span
							css={css`
								${iconWrapper};
								${Boolean(text) && mr};
							`}
						>
							{icon}
						</span>
					)}
					{text}
				</span>
			)}
		</button>
	);
};

export default Button;
