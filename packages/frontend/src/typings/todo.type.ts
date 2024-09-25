export type TodoType = {
	id?: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPrivate: boolean;
	authorId?: number;
};

export type TodoListProps = {
	todos: TodoType[];
};

export type TodoResType = {
	data: TodoType;
	message: string;
};

export type Pagination = {
	count: number;
	prev?: {
		page: number;
		limit: number;
	};
	next?: {
		page: number;
		limit: number;
	};
};

export type TodoListResponse = {
	message: string;
	data: TodoType[];
	pagination: Pagination;
};

export type IResults = {
	count: number;
	prev?: {
		page: number;
		limit: number;
	};
	next?: {
		page: number;
		limit: number;
	};
};
