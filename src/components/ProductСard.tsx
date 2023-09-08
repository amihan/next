'use client'

import { FC } from 'react';
import s from '../style/ProductСard.module.scss'
import { IProduct } from '@/types/cart.interface';
import Image from 'next/image';

// import image from "@/assets/Image.png"
import basket from '@/assets/basket-cart.svg';




const ProductСard: FC<IProduct> = ({ title, price, images }) => {
    return (
        <div className={s.cart}>
            {/* <img className={s.cart__image} src={images[0]} alt="image" /> */}
            <Image className={s.cart__image} src={images[0]} alt="image" />

            <div className={s.cart__block}>
                <p className={s.cart__title}>{title}</p>
                <span className={s.cart__price}>{price}$</span>
            </div>

            <button className={s.cart__addBasket}>
                <Image className={s.cart__addBaskeImage} src={basket} alt="image" />
                <span>В корзину</span>
            </button>
        </div>
    )
}


export default ProductСard;