/** @jsxImportSource @emotion/react */
import React, { useState, useCallback, useEffect } from 'react';
import { useTodosStore } from '~store/todos.store';
import TodosList from '~shared/components/list/todos.list';
import Button from '~shared/components/button/button.component';
import Modal from '~shared/components/modal/todos.create.modal';
import { SubmitHandler } from 'react-hook-form';
import { FilterType } from '~typings/filter.type';
import Loader from '~shared/components/loader/loader.component';
import { container } from '~shared/styles';
import { Icon } from '@blueprintjs/core';
import { debounce } from 'lodash';
import {
	allButton,
	completedButton,
	homePageWrapper,
	privateButton,
	publicButton,
} from './home.page.container.style';
import TodoForm from '~shared/components/forms/todos/todos.form';
import { useTodosHook } from '~shared/hooks/use.todos.hook';
import { useUserHook } from '~shared/hooks/use.user.hook';
import SearchInput from '~shared/components/forms/inputs/search.input';
import { CreateTodoFormData } from '~typings/forms.type';
import { filterTodos } from '~/utils/filter.show.todos';
import Pagination from '~shared/components/pagination/pagination';
import { useQueryParams } from '~shared/hooks/use.query.params';
import { useCustomMediaQuery } from '~shared/hooks/use.custom.mediaquery';

const HomePageContainer: React.FC = () => {
	const { todos, loading, totalPages } = useTodosStore();
	const { createTodo, getTodos } = useTodosHook();
	const { getProfile } = useUserHook();
	const [isOpen, setIsOpen] = useState(false);
	const [activeFilter, setActiveFilter] = useState<FilterType>('All');
	const { searchParams, updateQueryParams } = useQueryParams();
	const [searchTerm, setSearchTerm] = useState('');
	const { isTablet, isMobile, isDesktop } = useCustomMediaQuery();

	const debouncedSearch = useCallback(
		debounce((term: string) => {
			updateQueryParams({ search: term });
		}, 600),
		[setSearchTerm],
	);

	const handleSearchChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const value = e.target.value;

		setSearchTerm(value);
		debouncedSearch(value);
	};

	useEffect(() => {
		getProfile();
	}, []);

	useEffect(() => {
		const savedSearch = searchParams.get('search') || '';
		const page = parseInt(searchParams.get('page') || '1', 10);

		if (savedSearch) {
			setSearchTerm(savedSearch);
		}

		getTodos(searchTerm, page);
	}, [searchParams]);

	const openModal = (): void => setIsOpen(true);
	const closeModal = (): void => setIsOpen(false);

	const handleFilterChange = (filter: FilterType): void => {
		setActiveFilter(filter);
	};

	const onSubmitTodoForm: SubmitHandler<CreateTodoFormData> = (
		data,
	): void => {
		const page = parseInt(searchParams.get('page') || '1', 10);

		createTodo(data).then(() => getTodos(searchTerm, page));

		setIsOpen(false);
	};

	const setCurrentPage = (page: number): void => {
		updateQueryParams({ page });
	};

	return (
		<div css={[homePageWrapper(isMobile, isTablet), container]}>
			<div className="homeButtonWrapper">
				<div>
					<Button
						text="All"
						type="button"
						onClick={() => handleFilterChange('All')}
						extraButtonStyles={allButton(activeFilter)}
					/>
					<Button
						text="Private"
						type="button"
						onClick={() => handleFilterChange('Private')}
						extraButtonStyles={privateButton(activeFilter)}
					/>
					<Button
						text="Public"
						type="button"
						onClick={() => handleFilterChange('Public')}
						extraButtonStyles={publicButton(activeFilter)}
					/>
					<Button
						text="Completed"
						type="button"
						onClick={() => handleFilterChange('Completed')}
						extraButtonStyles={completedButton(activeFilter)}
					/>
				</div>
				<div className="searchInput">
					<div className="inputWrapper">
						<Icon icon="search" className="icon-search" />
						<SearchInput
							type="text"
							placeholder="Search todos"
							handleSearchChange={handleSearchChange}
							className="input-search"
							value={searchTerm}
						/>
					</div>
				</div>
				<div className="createButton">
					<Button
						text="Create todo"
						type="button"
						onClick={openModal}
					/>
				</div>
			</div>

			{loading ? (
				<Loader size="large" />
			) : (
				<TodosList todos={filterTodos(todos, activeFilter)} />
			)}

			{isTablet ||
				(isDesktop && (
					<Pagination
						totalPages={totalPages}
						currentPage={parseInt(
							searchParams.get('page') || '1',
							10,
						)}
						onPageChange={setCurrentPage}
					/>
				))}

			<Modal isOpen={isOpen} onClose={closeModal}>
				<TodoForm onSubmit={onSubmitTodoForm} />
			</Modal>
		</div>
	);
};

export default HomePageContainer;
