import { css } from '@emotion/react';
import { colors } from '~shared/styles';

export const paginationWrapper = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	margin-top: 16px;
`;

export const activePageStyle = css`
	background-color: ${colors.activeButton};
	color: ${colors.white};
`;
