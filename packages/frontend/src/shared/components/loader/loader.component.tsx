/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { Hourglass } from 'react-loader-spinner';
import { loaderWrapper } from './loader.component.style';
import { colors } from '~shared/styles';

type LoaderProps = {
	size: 'large' | 'medium' | 'small';
};

const Loader: React.FunctionComponent<LoaderProps> = ({ size = 'medium' }) => {
	const sizes = {
		large: '64px',
		medium: '44px',
		small: '34px',
	};

	const height = sizes[size];
	const width = sizes[size];

	return (
		<div css={loaderWrapper}>
			<Hourglass
				visible={true}
				height={height}
				width={width}
				ariaLabel="hourglass-loading"
				wrapperStyle={{}}
				wrapperClass=""
				colors={[colors.loaderBlue, colors.loaderBlueLight]}
			/>
		</div>
	);
};

export default Loader;
