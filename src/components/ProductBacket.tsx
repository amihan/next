'use client'
import s from '@/style/ProductBacket.module.scss'
import Image from 'next/image';
import image from "@/assets/Image.png"
import del from "@/assets/delete.svg"
import { FC, useState } from 'react';
import { IProductBasket } from '@/types/cart.interface';
import { useAppDispatch } from '@/store/hook';
import { addQuantity, removeBasket, removeQuantity } from '@/store/basketSlice';


const ProductBacket: FC<IProductBasket> = ({ title, price, images, id, stock, quantity }) => {
    const dispatch = useAppDispatch()

    const handleAddQuantityProduct = () => {
        if (quantity < stock) {
            dispatch(addQuantity(id))
        }
    }
    const handleRemoveQuantityProduct = () => {
        if (quantity > 1) {
            dispatch(removeQuantity(id))
        }
    }

    return (
        <div className={s.cart}>
            <div className={s.product}>
                <div className={s.product__info}>
                    <Image width={220} height={150} className={s.product__img} src={images[0]} alt="product" />
                    <div className={s.product__block}>
                        <p className={s.product__title}>{title} </p>
                        <p className={s.product__price}>{price}$</p>
                        <p className={s.product__stock}>На складе: {stock}</p>
                    </div>
                </div>
                <Image className={s.product__delete} onClick={() => dispatch(removeBasket(id))} src={del} alt="delete" />
            </div>
            <div className={s.cart__info}>
                <div className={s.quantity}>
                    <button className={s.quantity__btn} disabled={quantity <= 1} onClick={() => handleRemoveQuantityProduct()}>-</button>
                    <span className={s.quantity__text}>{quantity}</span>
                    <button className={s.quantity__btn} onClick={() => handleAddQuantityProduct()}>+</button>
                </div>

                <span className={s.cart__result}>{quantity * price}$</span>
            </div>
        </div>
    )
}


export default ProductBacket;