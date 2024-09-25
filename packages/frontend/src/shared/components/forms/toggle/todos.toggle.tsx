/** @jsxImportSource @emotion/react */
import React from 'react';
import { Switch } from '@blueprintjs/core';
import { toggleWrapper } from './todos.toggle.style';

type ToggleProps = {
	checked: boolean;
	onChange: (checked: boolean) => void;
};
const TodosToggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(event.target.checked);
	};

	return (
		<div css={toggleWrapper}>
			<Switch checked={checked} onChange={handleChange} />
		</div>
	);
};

export default TodosToggle;
