import { css, SerializedStyles } from '@emotion/react';
import { colors } from '~shared/styles';

export const btnStyles = (
	isDisabled: boolean,
	isLinkStyle?: boolean,
): SerializedStyles => css`
	padding: ${isLinkStyle ? '0' : '10px 20px'};
	background: ${isLinkStyle ? 'transparent' : colors.primaryButton};
	color: ${isLinkStyle ? colors.activeButton : colors.white};
	border: ${isLinkStyle ? 'none' : `1px solid ${colors.white}`};
	border-radius: 12px;
	text-decoration: ${isLinkStyle ? 'underline' : 'none'};
	cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
	transition: background-color 0.3s ease;

	&:hover {
		background: ${isLinkStyle ? 'transparent' : colors.activeButton};
		text-decoration: ${isLinkStyle ? 'underline' : 'none'};
	}

	&:disabled {
		background: ${isLinkStyle ? 'transparent' : colors.dimGray};
		color: ${isLinkStyle ? colors.dimGray : colors.white};
	}
`;

export const btnContentWrapper = css`
	display: flex;
	align-items: center;
`;

export const iconWrapper = css``;

export const mr = css`
	margin-right: 8px;
`;
