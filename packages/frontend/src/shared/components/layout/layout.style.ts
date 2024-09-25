import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const mainStyle = css`
	min-height: calc(100vh - 160px);
	background: ${theme.colors.background};
	color: ${theme.colors.text};
`;
