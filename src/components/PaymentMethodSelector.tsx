import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hook';
import { PaymentMethod, selectPaymentMethod } from '@/store/currencySlice';
import s from '@/style/PaymentMethodSelector.module.scss'

const PaymentMethodSelector = () => {

    const selectedMethod = useAppSelector(state => state.currency.selectedMethod);
    const dispatch = useDispatch();

    const handleSelectMethod = (method: PaymentMethod) => {
        dispatch(selectPaymentMethod(method));
    };

    return (
        <div className={s.payment}>
            <p className={s.payment__title}>Выберите способ оплаты:</p>
            <button
                className={`${s.payment__method} ${selectedMethod === PaymentMethod.Dollars ? s.selected : ''}`}
                onClick={() => handleSelectMethod(PaymentMethod.Dollars)}
            >
                dollar
            </button>
            <button
                className={`${s.payment__method} ${selectedMethod === PaymentMethod.Coins ? s.selected : ''}`}
                onClick={() => handleSelectMethod(PaymentMethod.Coins)}
            >
                coin
            </button>
        </div>
    );
}

export default PaymentMethodSelector;
