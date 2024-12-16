import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",

    initialState:{
        name: "",
        email: "",
        phone: "",
        password: "",
    },


    reducers: {
        signUp:  (state, action)=>{
            const {name, email, phone, password} = action.payload;
            state.name = name;
            state.email = email;
            state.phone = phone;
            state.password = password;
            console.log("auth details in redux :",state.name,state.email);
            
        }
    }
});

export const { signUp } = authSlice.actions;
export default authSlice.reducer