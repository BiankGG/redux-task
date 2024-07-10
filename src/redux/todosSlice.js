import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const allSlice = createSlice({
  name: "alls",
  initialState,
  reducers: {
    addAlls: (state, action) => {
      const newTodo = {
        id: Math.random(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    checkAlls: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteAlls: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addAlls, checkAlls, deleteAlls } = allSlice.actions;
export default allSlice.reducer;
