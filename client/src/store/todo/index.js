import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    completed: 0,
    filter: undefined
}

const getCompletedsLength = (data) => {
    return data.filter(x => x.completed === true).length;
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos];
        },
        getTodos: (state, action) => {
            state.todos = [...action.payload];
            state.completed = getCompletedsLength(action.payload);
        },
        updateTodo: (state, action) => {
            const todo = action.payload;
            const index = state.todos.findIndex(x => x.id === todo.id);
            state.todos[index] = todo;
            state.completed = getCompletedsLength(state.todos);
        },
        filterTodos: (state, action) => {
            state.filter = action.payload;
        }
    },
})

export const { addTodo, getTodos, updateTodo, filterTodos } = todoSlice.actions

export default todoSlice.reducer