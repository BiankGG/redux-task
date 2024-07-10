import { configureStore } from "@reduxjs/toolkit";
import allsReducer from './todosSlice.js';


const store = configureStore({
    reducer: {
        todos: allsReducer
    }
});

export default store;

