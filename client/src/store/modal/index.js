import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addTodoModal: false,
    editTodoModal: false,
    editedItemId: 0
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleAddModal: (state) => {
            state.addTodoModal = !state.addTodoModal;
        },
        toggleEditModal: (state, action) => {
            state.editTodoModal = !state.editTodoModal;
            state.editedItemId = action.payload;
        }
    },
})

export const { toggleAddModal, toggleEditModal } = modalSlice.actions

export default modalSlice.reducer