import { Helpers } from '@/helpers';

interface IOptions {
	page: string;
	limit: string;
}

export interface IResults {
	count: number;
	prev?: {
		page: number;
		limit: number;
	};
	next?: {
		page: number;
		limit: number;
	};
}

export interface IPaginateResult {
	results: IResults;
	paginateOptions: {
		skip: number;
		take: number;
	};
	totalPages: number;
}

export const paginate = (count: number, options: IOptions): IPaginateResult => {
	const results: IResults = {
		count,
	};

	const limit = parseInt(options.limit, 10);
	const page = parseInt(options.page, 10);
	const skip = (page - 1) * limit;

	if (count > 0 && skip >= count) {
		throw Helpers.httpErrors(404, 'Page not found!');
	}

	const totalPages = Math.ceil(count / limit);

	if (page > 1) {
		results.prev = { page: page - 1, limit };
	}

	const nextSkip = skip + limit;
	if (nextSkip < count) {
		results.next = { page: page + 1, limit };
	}

	return {
		results,
		paginateOptions: { skip, take: limit },
		totalPages,
	};
};
