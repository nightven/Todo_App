import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const userInfoWrapper = css`
	display: flex;
	flex-direction: column;
	gap: 16px;
	font-family: ${theme.typography.fontFamily};
	font-weight: ${theme.typography.fontWeight.normal};
	line-height: ${theme.typography.lineHeight};

	.title {
		font-family: ${theme.typography.fontFamily};
		font-weight: ${theme.typography.fontWeight.bold};
		font-size: ${theme.typography.headings.h3};
		line-height: ${theme.typography.lineHeight};
		text-align: center;
	}
	span {
		font-style: italic;
	}
`;
