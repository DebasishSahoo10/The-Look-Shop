import { configureStore as createStore } from "@reduxjs/toolkit";
import { FilterSlice } from "./FilterSlice";
import { AuthSlice } from "./AuthSlice";
import { DataSlice } from "./DataSlice";


export const Store = createStore({
    reducer : {
        filters : FilterSlice.reducer,
        auth : AuthSlice.reducer,
        data : DataSlice.reducer
    }
})