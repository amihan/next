'use client'

import EmptyBasket from "@/components/EmptyBasket";
import { useState } from "react";
import s from '@/style/Basket.module.scss'
import ProductBacket from "@/components/ProductBacket";
import Link from "next/link";


const Basket = () => {
    const [isEmpty, setEmpty] = useState(false)

    return (
        <div>
            {isEmpty ? <EmptyBasket /> : <div className={s.backet}>

                <p className={s.backet__title}>Корзина</p>

                <div className={s.backet__block}>
                    <div className={s.backet__product}>
                        <ProductBacket />
                        <ProductBacket />
                        <ProductBacket />
                        <ProductBacket />
                        <ProductBacket />
                    </div>

                    <div className={s.backet__result}>
                        <p className={s.backet__sum}>
                            <span>Итого</span>
                            <span>5000$</span>
                        </p>
                        <Link className={s.backet__order} href='/decoration'>Перейти к оформлению</Link>

                    </div>
                </div>

            </div>}
        </div>
    )
}


export default Basket;