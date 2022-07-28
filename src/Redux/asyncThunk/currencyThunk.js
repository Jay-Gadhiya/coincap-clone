import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCurrencies = createAsyncThunk("getCurrencies", async (loadedNumber) => {

        try {
            const response = await axios.get(`https://api.coincap.io/v2/assets/?limit=${loadedNumber * 50}`);
            return response.data;
        } catch (err) {
            console.error(err);
        }
})