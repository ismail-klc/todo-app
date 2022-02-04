import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditModal } from '../store/modal';
import { updateTodo } from '../store/todo';
import axiosClient from '../utils/axiosClient';
import Modal from './Modal';

const EditTodoSection = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        description: '',
        completed: true
    });
    const { editTodoModal, editedItemId } = useSelector((state) => state.modal);
    const { todos } = useSelector((state) => state.todo);

    useEffect(() => {
        if(editedItemId)
            setData(todos.find(x => x.id === editedItemId));
    }, [editedItemId]);

    const closeModal = () => {
        dispatch(toggleEditModal(0));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosClient.put(`/todos/${editedItemId}`, data);
            dispatch(updateTodo({ ...res.data }))
            closeModal();
        } catch (error) {

        }
    }

    return (
        <Modal isOpen={editTodoModal} setIsOpen={closeModal} className='p-2'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <h2 className='text-lg text-center text-white uppercase'>Todo Güncelle</h2>
                <input onChange={e => setData({ ...data, name: e.target.value })} value={data.name} className='w-full p-2 rounded-sm outline-none' type="text" placeholder='Task Adı' />
                <textarea onChange={e => setData({ ...data, description: e.target.value })} value={data.description} className='w-full p-2 rounded-sm outline-none' rows="5" placeholder='Task Açıklaması'></textarea>

                <div>
                    <input id='completed' type="checkbox" checked={data.completed} onChange={e => setData({ ...data, completed: e.target.checked })} />
                    <label htmlFor="completed" className='ml-2 text-white'>Tamamlandı</label>
                </div>

                <button className='w-full py-2 text-white rounded-sm bg-emerald-600 hover:bg-emerald-800'>Güncelle</button>
            </form>
        </Modal>
    );
};

export default EditTodoSection;
