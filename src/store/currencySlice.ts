'use client'

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearBasket } from "./basketSlice";
import { IProductBasket } from "@/types/cart.interface";


export enum PaymentMethod {
    Dollars = 'dollars',
    Coins = 'coins',
}

interface CurrencyState {
    dollars: number;
    coins: number;
    selectedMethod: PaymentMethod;
}

const initialState: CurrencyState = {
    dollars: 100000,
    coins: 2000000,
    selectedMethod: PaymentMethod.Dollars,
};


const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        exchangeDollarsToCoins: (state, action: PayloadAction<number>) => {
            const amount = action.payload;
            if (amount > 0 && state.dollars >= amount) {
                state.dollars -= amount;
                state.coins += amount;
            }
        },
        exchangeCoinsToDollars: (state, action: PayloadAction<number>) => {
            const amount = action.payload;
            if (amount > 0 && state.coins >= amount) {
                state.coins -= amount;
                state.dollars += amount;
            }
        },

        selectPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
            state.selectedMethod = action.payload;
        },

        spendMoney: (state, action: PayloadAction<number>) => {
            const amount = action.payload;

            if (amount > 0) {
                if (state.selectedMethod === PaymentMethod.Dollars) {
                    state.dollars -= amount;
                } else if (state.selectedMethod === PaymentMethod.Coins) {
                    state.coins -= amount;
                }
            }
        },
    },
});

export const { exchangeDollarsToCoins, exchangeCoinsToDollars, selectPaymentMethod, spendMoney } = currencySlice.actions;
export default currencySlice.reducer;