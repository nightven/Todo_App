import { css, SerializedStyles } from '@emotion/react';

export const changePasswordContainer = (
	isMobile: boolean,
): SerializedStyles => css`
	margin: 0 auto;
	margin-top: 20px;
	width: ${isMobile ? '100%' : '400px'};
`;
