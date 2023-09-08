'use client'

import EmptyBasket from "@/components/EmptyBasket";
import { useState } from "react";
import s from '@/style/Basket.module.scss'
import ProductBacket from "@/components/ProductBacket";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { selectTotalPrice } from "@/store/basketSlice";


const Basket = () => {
    const [isEmpty, setEmpty] = useState(false)

    const basket = useAppSelector(state => state.basket.list)
    const total = useAppSelector(selectTotalPrice);
    return (
        <div>
            {!basket.length ? <EmptyBasket /> : <div className={s.backet}>

                <p className={s.backet__title}>Корзина</p>

                <div className={s.backet__block}>
                    <div className={s.backet__product}>
                        {basket.map(value => <ProductBacket {...value} />)}
                    </div>

                    <div className={s.backet__result}>
                        <p className={s.backet__sum}>
                            <span>Итого</span>
                            <span>{total}$</span>
                        </p>
                        <Link className={s.backet__order} href='/decoration'>Перейти к оформлению</Link>

                    </div>
                </div>

            </div>}
        </div>
    )
}


export default Basket;