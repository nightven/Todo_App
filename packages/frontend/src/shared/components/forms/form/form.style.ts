import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const formStyle = css`
	display: flex;
	flex-direction: column;
	font-family: ${theme.typography.fontFamily};

	.buttonWrapper {
		display: flex;
		justify-content: end;
		gap: 8px;
	}
`;
