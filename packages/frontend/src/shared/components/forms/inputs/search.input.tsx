import React from 'react';
import { SearchInputProps } from '~typings/forms.type';

const SearchInput: React.FC<SearchInputProps> = ({
	type,
	placeholder,
	handleSearchChange,
	className,
	value,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			onChange={handleSearchChange}
			className={className}
			value={value}
		/>
	);
};

export default SearchInput;
