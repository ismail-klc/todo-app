import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, getTodos } from '../store/todo';
import axiosClient from '../utils/axiosClient';
import TodoListItem from './TodoListItem';

const TodoList = () => {
	const dispatch = useDispatch();
	const { todos, completed, filter } = useSelector((state) => state.todo);

	useEffect(async () => {
		try {
			const res = await axiosClient.get("/todos");
			dispatch(getTodos(res.data));
		} catch (error) {
		}
	}, []);

	const handleFilter = (val) => {
		dispatch(filterTodos(val));
	}


	return (
		<div className='mt-4'>
			{/* infos */}
			<div className='sticky z-auto flex justify-end min-w-0 px-3 space-x-4 bg-white top-10'>
				<button onClick={() => handleFilter(false)} className='font-bold text-green-800'>Tamamlandı({completed})</button>
				<button onClick={() => handleFilter(true)} className='font-bold text-red-800'>Tamamlanmadı({todos.length - completed})</button>
				<button onClick={() => handleFilter(undefined)} className='font-bold text-blue-800'>Hepsi({todos.length})</button>
			</div>

			{
				todos.filter(x => x.completed !== filter).map((todo, index) => (
					<TodoListItem key={index} todo={todo} />
				))
			}
		</div>
	);
};

export default TodoList;
