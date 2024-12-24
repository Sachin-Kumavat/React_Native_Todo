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
        cartItems: [],
        contactData: [],
        reviews: [],
        wishListItems: [],
        cartCount: 0
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload;
            state.todoData.push(newTodo)
        },
        // editTodo: (state, action) => {
        //     const { id, newTitle } = action.payload;
        //     const prevTitle = state.todoData.filter((todo) => todo.id == id)
        //     console.log("kkkkkkk", prevTitle, prevTitle.title);

        //     if (prevTitle) {
        //         prevTitle[0].title = newTitle
        //     }
        //     console.log(state.todoData);

        //     //find()
        //     //chaNGF
        // },
        // addToCart: (state, action) => {
        //     const { id, title, price, image } = action.payload;
        
        //     const item = state.cartItems.reduce((foundItem, currentItem) => {
        //         if (currentItem.id === id) {
        //             currentItem.quantity += 1; 
        //             foundItem = currentItem; 
        //         }
        //         return foundItem;
        //     }, null); 
        
        //     if (!item) {
        //         state.cartItems.push({ id, title, price, image, quantity: 1 });
        //         state.cartCount = state.cartItems.length; 
        //         console.log("Items added here", state.cartCount);
        //     }
        // },
        
        
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todoData = state.todoData.filter((todo) => todo.id !== id)
        },





       addToCart: (state, action) => {
            const { id, title, price, image } = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({ id, title, price, image, quantity: 1 });
                state.cartCount = state.cartItems.length;
                console.log("Items added here", state.cartCount)
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            console.log("New array after delete : ", state.cartItems)
        },
        incrementQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            }
        },
        addContact: (state, action) => {
            const contactDetails = action.payload;
            state.contactData.push(contactDetails);
            console.log("Data saved to contactData store ", state.contactData);

        },
        addReview: (state, action) => {
            state.reviews.push(action.payload)
        },

        //Wishlist Operations
        addToWishlist: (state, action) => {
            const { id, price, title, image } = action.payload;
            const itemIndex = state.wishListItems.findIndex((item) => item.id === id);

            if (itemIndex >= 0) {
                return;
            } else {
                state.wishListItems.push({ id, title, price, image });
                console.log("Wishlist items added here", state.wishListItems);
            }
        },

        removeFromWishlist: (state, action) => {
            const { id } = action.payload;
            state.wishListItems = state.wishListItems.filter((item) => item.id !== id);
        }
    }
})

export const { addTodo, editTodo, deleteTodo, addToCart, removeFromCart, incrementQuantity, decrementQuantity, addContact, addReview, addToWishlist, removeFromWishlist } = todoSlice.actions;
export default todoSlice.reducer