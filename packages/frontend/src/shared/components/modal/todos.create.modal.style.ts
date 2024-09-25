import { css, SerializedStyles } from '@emotion/react';
import { Classes } from '@blueprintjs/core';
import { colors } from '~shared/styles';
import { theme } from '~shared/styles/theme';

export const modalOverlay = css`
	.${Classes.OVERLAY} {
		background-color: rgba(0, 0, 0, 0.7) !important;
	}
`;

export const modalContent = css`
	background: ${colors.bgColor};
	position: relative;
	padding: 8px;
	.${Classes.DIALOG} {
		max-width: 500px;
		width: 100%;
		padding: 20px;
		background: none;
	}

	.${Classes.DIALOG_CLOSE_BUTTON} {
		position: absolute;
		top: 8px;
		right: 8px;
		border-radius: 50%;
		background-color: transparent;
	}
`;

export const modalDialogStyles = (isMobile: boolean): SerializedStyles => css`
	border-radius: 12px;
	overflow: hidden;
	box-shadow: ${theme.shadows.large};
	width: ${isMobile ? '380px' : '500px'};
`;
