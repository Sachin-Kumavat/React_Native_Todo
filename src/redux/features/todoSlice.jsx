import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "cartSlice",
    initialState: {
        todoData: [
            // {
            //     id: "01",
            //     title: "wash table"
            // },
            // {
            //     id: "02",
            //     title: "Cooking"
            // },
            // {
            //     id: "03",
            //     title: "Software Coding"
            // },
            // {
            //     id: "04",
            //     title: "Solving Problem"
            // }
        ],
        cartItems: []
        
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
        },





        addToCart: (state, action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({...action.payload,quantity:1});
            }
        },
        removeFromCart: (state, action)=>{
            const {id} = action.payload;
            state.cartItems = state.cartItems.filter((item)=>item.id !== id);
        },
        incrementQuantity: (state, action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].quantity += 1;
            }
        },
        decrementQuantity: (state, action)=>{
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex>=0 && state.cartItems[itemIndex].quantity>1){
                state.cartItems[itemIndex].quantity -= 1;
            }
        }
    }
})

export const { addTodo, editTodo, deleteTodo, addToCart, removeFromCart, incrementQuantity, decrementQuantity } = todoSlice.actions;
export default todoSlice.reducer