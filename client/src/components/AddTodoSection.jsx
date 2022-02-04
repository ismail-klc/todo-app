import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddModal } from '../store/modal';
import { addTodo } from '../store/todo';
import axiosClient from '../utils/axiosClient';
import Modal from './Modal';

const AddTodoSection = () => {
    const dispatch = useDispatch();
    const initialData = {
        name: '',
        description: ''
    };
    const [data, setData] = useState(initialData);
    const { addTodoModal } = useSelector((state) => state.modal);

    const closeModal = () => {
        dispatch(toggleAddModal());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosClient.post('/todos', data);
            dispatch(addTodo({ ...res.data }))
            setData(initialData);
            closeModal();
        } catch (error) {

        }
    }

    return (
        <Modal isOpen={addTodoModal} setIsOpen={closeModal} className='p-2'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <h2 className='text-lg text-center text-white uppercase'>Todo Ekle</h2>
                <input onChange={e => setData({ ...data, name: e.target.value })} value={data.name} className='w-full p-2 rounded-sm outline-none' type="text" placeholder='Task Adı' />
                <textarea onChange={e => setData({ ...data, description: e.target.value })} value={data.description} className='w-full p-2 rounded-sm outline-none' rows="5" placeholder='Task Açıklaması'></textarea>
                <button className='w-full py-2 text-white rounded-sm bg-emerald-600 hover:bg-emerald-800'>Ekle</button>
            </form>
        </Modal>
    );
};

export default AddTodoSection;
