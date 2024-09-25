import { css } from '@emotion/react';
import { colors } from '~shared/styles';
import { theme } from '~shared/styles/theme';

export const collapseContainer = css`
	margin-top: 20px;
	width: 400px;
`;

export const profileWrapper = css`
	background: ${colors.bgColor};
	border: 1px solid ${theme.colors.light};
	border-radius: ${theme.borders.radiusLarge};
	min-height: calc(100vh - 108px - 40px);
`;
