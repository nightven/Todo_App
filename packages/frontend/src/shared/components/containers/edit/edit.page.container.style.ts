import { css } from '@emotion/react';
import { theme } from '~shared/styles/theme';

export const editPageWrapper = css`
	h1 {
		font-size: ${theme.typography.headings.h1};
	}

	.backButtonWrapper {
		display: flex;
		justify-content: end;
	}
`;
