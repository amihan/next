'use client'
import s from '@/style/ProductBacket.module.scss'
import Image from 'next/image';
import image from "@/assets/Image.png"
import del from "@/assets/delete.svg"
import { useState } from 'react';


const ProductBacket = () => {

    const [quantity, setQuantity] = useState(1)

    return (
        <div className={s.cart}>
            <div className={s.product}>
                <div className={s.product__info}>
                    <Image className={s.product__img} src={image} alt="product" />
                    <div className={s.product__block}>
                        <p className={s.product__title}>Apple BYZ S852I</p>
                        <p className={s.product__price}>200$</p>
                    </div>
                </div>
                <Image className={s.product__delete} src={del} alt="delete" />
            </div>
            <div className={s.cart__info}>
                <div className={s.quantity}>
                    <button className={s.quantity__btn}>-</button>
                    <span className={s.quantity__text}>{quantity}</span>
                    <button className={s.quantity__btn}>+</button>
                </div>

                <span className={s.cart__result}>200$</span>
            </div>
        </div>
    )
}


export default ProductBacket;