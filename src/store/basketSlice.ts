'use client'

import { IProduct } from "@/types/cart.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface BasketState {
    list: IProduct[]
}

const initialState: BasketState = {
    list: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action: PayloadAction<IProduct>) => {
            const isItemInBasket = state.list.some(product => product.id === action.payload.id);

            if (!isItemInBasket) {
                state.list = [...state.list, action.payload];
            }
        },
        removeBasket: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((product) => product.id !== action.payload);
        }
    },
});

export const { addBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;