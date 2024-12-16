import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import authReducer from "./features/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    inputSlice : todoReducer,
    authSlice :  authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)