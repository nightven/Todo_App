export type TodoType = {
	isPrivate: boolean;
	isCompleted: boolean;
	title: string;
	description: string;
	authorId: number;
};
export type QueryType = {
	page?: string;
	limit?: string;
	title?: string;
	filter: string;
};
