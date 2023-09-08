'use client'

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    dollars: 100,
    coins: 2000,
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
    },
});

export const { exchangeDollarsToCoins, exchangeCoinsToDollars, selectPaymentMethod } = currencySlice.actions;
export default currencySlice.reducer;