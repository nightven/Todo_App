import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TodoListProps } from '~typings/todo.type';
import TodoItem from '../item/todo.item';

const TabletTodosList: React.FC<TodoListProps> = ({ todos }) => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
	};

	return (
		<Slider {...settings}>
			{todos.map((todo) => (
				<TodoItem key={`${todo.id}${todo.title}`} id={todo.id} tablet />
			))}
		</Slider>
	);
};

export default TabletTodosList;
