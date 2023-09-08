'use client'

import s from '../style/Header.module.scss'
import basket from '@/assets/basket.svg'
import like from '@/assets/like.svg'
import { useAppSelector } from '@/store/hook'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    const listProduct = useAppSelector(state => state.basket.list)
    return (
        <header className={s.header}>

            <Link href='/'> <h1 className={s.header__logoName}>QPICK</h1></Link>

            <div className={s.header__block}>
                <Image className={s.header__like} src={like} alt="like" />
                <div className={s.header__blockBasket}>
                    <Link href='/backet'>
                        <Image className={s.header__basket} src={basket} alt="basket" />
                    </Link>
                    <p className={s.header__quantityProduct}>{listProduct.length}</p>
                </div>

            </div>


        </header>
    )
}


export default Header;