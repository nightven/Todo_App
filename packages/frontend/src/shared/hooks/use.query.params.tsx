import { useSearchParams } from 'react-router-dom';

type QueryParamsReturn = {
	searchParams: URLSearchParams;
	updateQueryParams: (params: { search?: string; page?: number }) => void;
};

export const useQueryParams = (): QueryParamsReturn => {
	const [searchParams, setSearchParams] = useSearchParams();

	const updateQueryParams = (params: {
		search?: string;
		page?: number;
	}): void => {
		const newParams = new URLSearchParams(searchParams);
		if (params.search !== undefined) {
			if (params.search === '') {
				newParams.delete('search');
			} else {
				newParams.set('search', params.search);
			}
		}
		if (params.page) {
			newParams.set('page', String(params.page));
		}
		setSearchParams(newParams);
	};

	return { searchParams, updateQueryParams };
};
