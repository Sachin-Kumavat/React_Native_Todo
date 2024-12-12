import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "inputSlice",
    initialState: {
        todoData: [
            {
                id: "01",
                title: "wash table"
            },
            {
                id: "02",
                title: "Cooking"
            },
            {
                id: "03",
                title: "Software Coding"
            },
            {
                id: "04",
                title: "Solving Problem"
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload;
            state.todoData.push(newTodo)
        },

        editTodo: (state, action) => {
            const { id, newTitle } = action.payload;
            const prevTitle = state.todoData.filter((todo) => todo.id == id)
            console.log("kkkkkkk", prevTitle, prevTitle.title);

            if (prevTitle) {
                prevTitle[0].title = newTitle
            }
            console.log(state.todoData);

            //find()
            //chaNGF
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todoData = state.todoData.filter((todo) => todo.id !== id)
        }
    }
})

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer