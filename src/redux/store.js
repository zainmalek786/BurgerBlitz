import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from './reduxSlice.js'



export const store = configureStore({
    reducer: {
        reduxSlice: reduxReducer
    },

})