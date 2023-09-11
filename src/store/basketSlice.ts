'use client'

import { IProduct, IProductBasket } from "@/types/cart.interface";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { useAppSelector } from "./hook";


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
        addBasket: (state, action: PayloadAction<IProduct>) => {
            const isItemInBasket = state.list.some(product => product.id === action.payload.id);

            if (!isItemInBasket) {
                state.list = [...state.list, { ...action.payload, quantity: 1 }];
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
        clearBasket: (state) => {
            state.list = [];
        },
    },
});


export const selectTotalPrice = createSelector(
    (state: RootState) => state.basket.list,
    (list) => list.reduce((total, product) => total + product.price * product.quantity, 0)
);

export const { addBasket, removeBasket, addQuantity, removeQuantity, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;