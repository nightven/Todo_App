/** @jsxImportSource @emotion/react */
import React, { useState, useCallback, useEffect } from 'react';
import { useTodosStore } from '~store/todos.store';
import TodosList from '~shared/components/list/todos.list';
import Button from '~shared/components/button/button.component';
import Modal from '~shared/components/modal/todos.create.modal';
import { SubmitHandler } from 'react-hook-form';
import { FilterType } from '~typings/filter.type';
import { useCustomTheme } from '~shared/hooks/use.custom.theme';
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
import { useSearchParams } from 'react-router-dom';
import { CreateTodoFormData } from '~typings/forms.type';
import { filterTodos } from '~/utils/filter.show.todos';

const HomePageContainer: React.FC = () => {
	const { todos, loading } = useTodosStore();
	const { createTodo, getTodos } = useTodosHook();
	const { getProfile } = useUserHook();
	const [isOpen, setIsOpen] = useState(false);
	const [activeFilter, setActiveFilter] = useState<FilterType>('All');
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchTerm, setSearchTerm] = useState('');
	const { isTablet, isMobile } = useCustomTheme();

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

	const updateQueryParams = (params: { search?: string }): void => {
		const newParams = new URLSearchParams(searchParams);
		if (params.search) {
			newParams.set('search', params.search);
		}
		setSearchParams(newParams);
	};

	useEffect(() => {
		getProfile();
	}, []);

	useEffect(() => {
		const savedSearch = searchParams.get('search') || '';

		if (savedSearch) {
			setSearchTerm(savedSearch);
		}

		getTodos(searchTerm);
	}, [searchParams]);

	const openModal = (): void => setIsOpen(true);
	const closeModal = (): void => setIsOpen(false);

	const handleFilterChange = (filter: FilterType): void => {
		setActiveFilter(filter);
	};

	const onSubmitTodoForm: SubmitHandler<CreateTodoFormData> = (
		data,
	): void => {
		createTodo(data);
		setIsOpen(false);
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
				<Loader height="60px" width="60px" />
			) : (
				<TodosList todos={filterTodos(todos, activeFilter)} />
			)}

			<Modal isOpen={isOpen} onClose={closeModal}>
				<TodoForm onSubmit={onSubmitTodoForm} />
			</Modal>
		</div>
	);
};

export default HomePageContainer;
