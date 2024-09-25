import { create } from 'zustand';
import { IResults, TodoType } from '~typings/todo.type';

export interface ITodosStore {
	todos: TodoType[] | null;
	viewedTodo: TodoType | null;
	error: string | null;
	loading: boolean;
	pagination: IResults;
	hasMore: boolean;
	page: number;
	setPage: (page: number) => void;
	setHasMore: (hasMore: boolean) => void;
	setTodos: (todos: TodoType[] | null) => void;
	setViewedTodo: (todo: TodoType | null) => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	setPagination: (pagination: IResults | null) => void;
}

export const useTodosStore = create<ITodosStore>((set) => ({
	todos: [],
	viewedTodo: null,
	loading: false,
	error: null,
	pagination: null,
	page: 1,
	hasMore: false,

	setPage: (page: number): void => {
		set((state) => ({ ...state, page }));
	},

	setHasMore: (hasMore: boolean): void => {
		set((state) => ({ ...state, hasMore }));
	},

	setTodos: (todos: TodoType[] | null): void => {
		set((state) => ({
			...state,
			todos,
		}));
	},

	setViewedTodo: (todo: TodoType | null): void => {
		set({ viewedTodo: todo });
	},

	setLoading: (loadin: boolean): void => {
		set({ loading: loadin });
	},
	setError: (error: string): void => {
		set({ error: error });
	},
	setPagination: (pagination: IResults): void => {
		set({ pagination: pagination });
	},
}));
