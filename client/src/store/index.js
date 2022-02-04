import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal'
import todoReducer from './todo'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer
    },
})