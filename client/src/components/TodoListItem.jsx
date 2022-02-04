import React from 'react';
import moment from 'moment/min/moment-with-locales';
import CharmCircleTick from './Icons/CharmCircleTick';
import IcRoundEdit from './Icons/IcRoundEdit';
import EntypoCircleWithCross from './Icons/EntypoCircleWithCross';
import axiosClient from '../utils/axiosClient';
import { useDispatch } from 'react-redux';
import { updateTodo } from "../store/todo";
import { toggleEditModal } from '../store/modal';

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();

    const toggleCompleted = async () => {
        try {
            const res = await axiosClient.put(`/todos/${todo.id}`, {
                completed: !todo.completed
            });
            dispatch(updateTodo(res.data));
        } catch (error) {

        }
    }

    const openEditModal = () => {
        dispatch(toggleEditModal(todo.id));
    }

    return (
        <div className='flex px-4 py-1 mt-1 bg-white'>
            <button className={`text-2xl ${todo.completed ? "text-green-800" : "text-red-800"}`} onClick={toggleCompleted}>
                {todo.completed ? <CharmCircleTick /> : <EntypoCircleWithCross />}
            </button>
            <div className='flex flex-col flex-1 ml-4'>
                <h2 className='text-xl font-extrabold uppercase'>{todo.name}</h2>
                <p className='font-light'>{todo.description}</p>
                <span className='mt-2 text-sm'>Eklendi {moment(new Date(todo.createdAt), "YYYYDD").fromNow()}</span>
                <span className='text-sm'>Güncellendi {moment(new Date(todo.updatedAt), "YYYYDD").fromNow()}</span>
            </div>
            <button onClick={openEditModal} className='text-2xl text-blue-600'>
                <IcRoundEdit />
            </button>
        </div>
    );
};

export default TodoListItem;
