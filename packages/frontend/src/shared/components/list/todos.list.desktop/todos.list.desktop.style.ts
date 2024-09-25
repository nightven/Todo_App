import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const desktopListWrapper = css`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	gap: 1px;
	padding: 10px;
	align-items: center;
	border: solid 1px white;
	border-radius: 12px;
	overflow-y: scroll;
	max-height: 600px;
	background: ${theme.colors.background};
	color: ${theme.colors.text};

	.colons {
		font-weight: bold;
		height: 60px;
		padding: 8px;
		border: 1px solid white;
		display: flex;
		align-items: center;
	}
	.center {
		justify-content: center;
	}

	.todoCell {
		height: 60px;
		border: 1px solid white;
		padding: 8px;
	}

	.desktopButtonWrapper {
		display: flex;
		gap: 12px;
		justify-content: end;
		height: 60px;
		border: 1px solid white;
		padding: 8px;
	}
`;

export const iconButtonStyles = css`
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
