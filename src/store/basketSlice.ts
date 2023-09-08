'use client'

import { IProductBasket } from "@/types/cart.interface";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";


interface BasketState {
    list: IProductBasket[]
}

const initialState: BasketState = {
    list: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action: PayloadAction<IProductBasket>) => {
            const isItemInBasket = state.list.some(product => product.id === action.payload.id);

            if (!isItemInBasket) {
                state.list = [...state.list, action.payload];
            }
        },
        removeBasket: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((product) => product.id !== action.payload);
        },
        addQuantity: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const itemToUpdate = state.list.find(product => product.id === itemId);

            if (itemToUpdate) {
                itemToUpdate.quantity += 1;
            }
        },
        removeQuantity: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const itemToUpdate = state.list.find(product => product.id === itemId);

            if (itemToUpdate) {
                itemToUpdate.quantity -= 1;
            }
        },

    },
});


export const selectTotalPrice = createSelector(
    (state: RootState) => state.basket.list,
    (list) => list.reduce((total, product) => total + product.price * product.quantity, 0)
);

export const { addBasket, removeBasket, addQuantity, removeQuantity } = basketSlice.actions;
export default basketSlice.reducer;