import { createSlice } from "@reduxjs/toolkit"
import { getCurrencies } from "../asyncThunk/currencyThunk";


const initialState = {
    status : "idle",
    currencies : []
}

const currencySlice = createSlice({
    name : "currencies",
    initialState,
    reducers : {},

    extraReducers : {
        [getCurrencies.pending] : (state) => {
            state.status = "pending"
        },

        [getCurrencies.fulfilled] : (state, action) => {
            state.status = "fulfilled"
            state.currencies = action.payload
        },

        [getCurrencies.rejected] : (state) => {
            state.status = "rejected"
        }
    }
})


export default currencySlice.reducer;