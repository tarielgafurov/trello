import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../userReducer/userSlice";
import  slisces  from "../userReducer/slisces";

export const store = configureStore({
    reducer: {
        user: userSlice,
        userTrello: slisces,
    },
})
