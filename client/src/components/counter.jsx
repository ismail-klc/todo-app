import React from 'react';
import { decrement, increment } from '@/store/counter'
import { useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()

    return (
        <p>
            <button
                className='bg-zinc-700 text-white py-2 px-3 rounded hover:bg-zinc-800'
                type="button" onClick={() => dispatch(increment())}>
                arttır
            </button>
            <button className='primary' type="button" onClick={() => dispatch(decrement())}>
                azalt
            </button>
        </p>
    )
};

export default Counter;
