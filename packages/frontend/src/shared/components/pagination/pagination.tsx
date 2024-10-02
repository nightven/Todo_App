/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '../button/button.component';
import { activePageStyle, paginationWrapper } from './pagination.style';

type PaginationProps = {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
	totalPages = 1,
	currentPage,
	onPageChange,
}) => {
	const handlePageChange = (page: number): void => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	const renderPages = (): React.ReactNode[] => {
		const pages: React.ReactNode[] = [];

		pages.push(
			<Button
				key="prev"
				text="<"
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			/>,
		);

		pages.push(
			<Button
				key="1"
				text="1"
				onClick={() => handlePageChange(1)}
				extraButtonStyles={
					currentPage === 1 ? activePageStyle : undefined
				}
			/>,
		);

		if (currentPage > 3) {
			pages.push(<span key="dots1">...</span>);
		}

		for (
			let i = Math.max(2, currentPage - 1);
			i <= Math.min(totalPages - 1, currentPage + 1);
			i++
		) {
			pages.push(
				<Button
					key={i}
					text={String(i)}
					onClick={() => handlePageChange(i)}
					extraButtonStyles={
						currentPage === i ? activePageStyle : undefined
					}
				/>,
			);
		}

		if (currentPage < totalPages - 2) {
			pages.push(<span key="dots2">...</span>);
		}

		if (totalPages > 1) {
			pages.push(
				<Button
					key={totalPages}
					text={String(totalPages)}
					onClick={() => handlePageChange(totalPages)}
					extraButtonStyles={
						currentPage === totalPages ? activePageStyle : undefined
					}
				/>,
			);
		}

		pages.push(
			<Button
				key="next"
				text=">"
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			/>,
		);

		return pages;
	};

	return <div css={paginationWrapper}>{renderPages()}</div>;
};

export default Pagination;
