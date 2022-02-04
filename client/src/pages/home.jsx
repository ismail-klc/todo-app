import React from 'react';
import AddTodoSection from '@/components/AddTodoSection';
import TodoList from '../components/TodoList';
import { useDispatch } from 'react-redux';
import { toggleAddModal } from '../store/modal';
import EditTodoSection from '../components/EditTodoSection';

const Home = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleAddModal());
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mt-10 text-2xl text-white uppercase'>Todo List</h1>
      <div className='flex flex-col w-full max-w-2xl mx-auto mt-6'>
        <button
          onClick={openModal}
          className='sticky top-0 w-full py-2 text-white rounded-sm bg-emerald-600 hover:bg-emerald-800'>
          Yeni Ekle
        </button>
        <AddTodoSection />
        <EditTodoSection />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
