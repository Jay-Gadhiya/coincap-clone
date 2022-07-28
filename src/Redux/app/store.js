import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../slice/currencySlice";


export const store = configureStore({
    reducer : {
        currencies : currencyReducer,
    }
})