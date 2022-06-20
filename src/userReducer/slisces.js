import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date : false,
    newTodos : false,
    todos : [],
}

export const slisces = createSlice({
    name : "todo",
    initialState,
    reducers : {
        setDate : (state ) => {
            state.date = !state.date
        },
        addTodo : (state , action) => {
            state.todos.push(action.payload)
        },
        setNewTodos : (state) => {
            state.newTodos = state.newTodos
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        }
    }
}) 

export const { setDate , addTodo , setNewTodos  , removeTodo } = slisces.actions
export default slisces.reducer