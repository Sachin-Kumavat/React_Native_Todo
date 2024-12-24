import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
export const setIsLoginAsync = createAsyncThunk(
  'auth/setIsLoginAsync',
  async (loginValue) => {
    await AsyncStorage.setItem("ISLOGIN", JSON.stringify(loginValue)); 
    return loginValue; 
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    name: "",
    email: "",
    phone: "",
    password: "",
    isLogin: false 
  },
  reducers: {
    signUp: (state, action) => {
      const { name, email, phone, password } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.password = password;
      console.log("auth details in redux:", state.name, state.email);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setIsLoginAsync.fulfilled, (state, action) => {
      state.isLogin = action.payload; 
    });
  }
});

export const { signUp } = authSlice.actions;
export default authSlice.reducer;
