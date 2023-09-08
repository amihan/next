'use client'
import PaymentMethodSelector from '@/components/PaymentMethodSelector';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { exchangeCoinsToDollars, exchangeDollarsToCoins } from '@/store/currencySlice';
import s from '@/style/Decoration.module.scss'
import Link from 'next/link';
import { useState } from 'react';


const Decoration = () => {
    const { dollars, coins } = useAppSelector(state => state.currency);
    const dispatch = useAppDispatch();

    const [exchangeAmount, setExchangeAmount] = useState<number>(1);

    const handleExchangeDollarsToCoins = () => {
        dispatch(exchangeDollarsToCoins(exchangeAmount));
    };

    const handleExchangeCoinsToDollars = () => {
        dispatch(exchangeCoinsToDollars(exchangeAmount));
    };

    return (
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
                    <div className={s.information}>
                        <span className={s.information__quantity}>2x</span>
                        <span className={s.information__name}>Наушники Apple BYZ S852I</span>
                        <span className={s.information__price}>5000$</span>
                    </div>
                    <div className={s.information}>
                        <span className={s.information__quantity}>2x</span>
                        <span className={s.information__name}>Наушники Apple BYZ S852I</span>
                        <span className={s.information__price}>5000$</span>
                    </div>
                    <div className={s.information}>
                        <span className={s.information__quantity}>2x</span>
                        <span className={s.information__name}>Наушники Apple BYZ S852I</span>
                        <span className={s.information__price}>5000$</span>
                    </div>
                </div>

                <div className={s.order__result}>
                    <span>К оплате</span>
                    <span className={s.order__price}>15000$</span>
                </div>
                <PaymentMethodSelector />

                <Link href='/thanks' className={s.order__buy}>
                    Завершить покупку
                </Link>

            </div>
        </div >
    )
}


export default Decoration;