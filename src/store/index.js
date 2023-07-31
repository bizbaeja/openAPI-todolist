import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
//새로고침 유지
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const rootReducer = combineReducers({

    auth: authSlice,
})

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
})


export default store