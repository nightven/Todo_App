import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const toggleWrapper = css`
	display: flex;
	justify-content: space-between;
	span {
		color: ${theme.colors.text};
	}
`;

export const buttonWrapper = css`
	display: flex;
	justify-content: end;
`;
