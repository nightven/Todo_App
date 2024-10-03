import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const formStyle = css`
	display: flex;
	flex-direction: column;
	font-family: ${theme.typography.fontFamily};

	.buttonWrapper {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 8px;
	}

	.bp5-form-helper-text {
		color: ${theme.colors.danger};
	}
`;
