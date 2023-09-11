'use client'
import PaymentMethodSelector from '@/components/PaymentMethodSelector';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { PaymentMethod, exchangeCoinsToDollars, exchangeDollarsToCoins, spendMoney } from '@/store/currencySlice';
import s from '@/style/Decoration.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import { clearBasket, selectTotalPrice } from '@/store/basketSlice';


const Decoration = () => {
    const { dollars, coins } = useAppSelector(state => state.currency);

    const basket = useAppSelector(state => state.basket);
    const currency = useAppSelector(state => state.currency)

    const dispatch = useAppDispatch();
    const totalPrice = useAppSelector(selectTotalPrice);

    const [exchangeAmount, setExchangeAmount] = useState<number>(1);

    const handleExchangeDollarsToCoins = () => {
        dispatch(exchangeDollarsToCoins(exchangeAmount));
    };

    const handleExchangeCoinsToDollars = () => {
        dispatch(exchangeCoinsToDollars(exchangeAmount));
    };

    const handlePayment = () => {
        if (totalPrice > 0) {
            if (currency.selectedMethod === PaymentMethod.Dollars && currency.dollars >= totalPrice) {
                dispatch(spendMoney(totalPrice))
                dispatch(clearBasket())
            } else if (currency.selectedMethod === PaymentMethod.Coins && currency.coins >= totalPrice) {
                dispatch(spendMoney(totalPrice))
                dispatch(clearBasket())
            }
        }
    }


    console.log(typeof (totalPrice))
    return (
        <div>
            <div className={s.decoration}>
                <div className={s.currencyExchange}>
                    <div className={s.currencyExchange__info}>
                        <p className={s.currencyExchange__title}>Обмен валюты</p>
                        <p className={s.currencyExchange__balance}>Ваш баланс: </p>
                        <p className={s.currencyExchange__dollars}>Доллары: {dollars} $</p>
                        <p className={s.currencyExchange__coins}>Монеты: {coins} coin</p>
                    </div>


                    <input
                        className={s.currencyExchange__field}
                        type="number"
                        value={exchangeAmount}
                        onChange={(e) => setExchangeAmount(Number(e.target.value))}
                    />

                    <div className={s.currencyExchange__blockBtn}>
                        <button className={s.currencyExchange__btn} onClick={handleExchangeDollarsToCoins}>$ в coin</button>
                        <button className={s.currencyExchange__btn} onClick={handleExchangeCoinsToDollars}>coin в $</button>
                    </div>

                </div>
                <div className={s.order}>
                    <p className={s.order__title}>Ваш заказ</p>

                    <div className={s.order__list}>
                        {basket.list.map(({ quantity, title, price, id }) => <div className={s.information} key={id}>
                            <span className={s.information__quantity}>{quantity}x</span>
                            <span className={s.information__name}>{title}</span>
                            <span className={s.information__price}>{quantity * price}$</span>
                        </div>)}

                    </div>

                    <div className={s.order__result}>
                        <span>К оплате</span>
                        <span className={s.order__price}>{totalPrice}$</span>
                    </div>
                    <PaymentMethodSelector />

                    <button className={s.order__buy} onClick={handlePayment} disabled={!basket.list.length}>
                        Завершить покупку
                    </button>

                </div>
            </div >
            {!basket.list.length &&
                <div className={s.thanks}>
                    <p className={s.thanks__text}>
                        <p className={s.thanks__pay}>Оплата прошла успешно!</p>

                        Спасибо за покупку!

                        Мы очень ценим ваш выбор и надеемся, что товар, который вы купили, принесет вам полное удовлетворение и радость.
                        Если у вас возникнут какие-либо вопросы или потребуется помощь, пожалуйста, не стесняйтесь обращаться к нам. Мы всегда готовы помочь вам.
                        Еще раз, спасибо за то, что выбрали наш магазин. Желаем вам приятного использования товара и хорошего дня!
                    </p>
                </div>
            }
        </div>
    )
}


export default Decoration;