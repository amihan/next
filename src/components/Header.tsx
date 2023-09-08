'use client'

import s from '../style/Header.module.scss'
import basket from '@/assets/basket.svg'
import like from '@/assets/like.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={s.header}>

            <Link href='/'> <h1 className={s.header__logoName}>QPICK</h1></Link>

            <div className={s.header__block}>
                <Image className={s.header__like} src={like} alt="like" />
                <Link href='/backet'> <Image className={s.header__basket} src={basket} alt="basket" /></Link>
            </div>


        </header>
    )
}


export default Header;