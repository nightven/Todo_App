/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';
import { container } from '~shared/styles';
import TodoItem from '~shared/components/list/item/todo.item';

const TodoContainer: React.FC = () => {
	const { id } = useParams();

	return (
		<div css={container}>
			<TodoItem id={Number(id)} />
		</div>
	);
};

export default TodoContainer;
