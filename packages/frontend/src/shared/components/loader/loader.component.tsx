/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { Hourglass } from 'react-loader-spinner';
import { loaderWrapper } from './loader.component.style';
import { colors } from '~shared/styles';

type LoaderProps = {
	height: string;
	width: string;
};

const Loader: React.FunctionComponent<LoaderProps> = ({ height, width }) => {
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
