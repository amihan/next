"use client"

import { configureStore } from "@reduxjs/toolkit";
import currencyRuducer from './currencySlice'
import basketRuducer from './basketSlice'


const store = configureStore({
    reducer: {
        currency: currencyRuducer,
        basket: basketRuducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch