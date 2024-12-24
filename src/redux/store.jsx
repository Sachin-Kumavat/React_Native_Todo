import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import authReducer from "./features/authSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const rootReducer = combineReducers({
//     inputSlice : todoReducer,
//     authSlice :  authReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
    // reducer: persistedReducer,
    // middleware: [thunk],
    reducer: {
        inputSlice : todoReducer,
        authSlice :  authReducer
    }
});

// export const persistor = persistStore(store);
// export default store
