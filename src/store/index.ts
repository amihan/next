"use client"

import { configureStore } from "@reduxjs/toolkit";
import currencyRuducer from './currencySlice'


const store = configureStore({
    reducer: {
        currency: currencyRuducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch