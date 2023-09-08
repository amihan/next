import Image from "next/image";
import s from '@/style/EmptyBasket.module.scss'
import basket from '@/assets/Illustration.svg'
import Link from "next/link";

const EmptyBasket = () => {
    return (
        <div className={s.backet}>
            <Image className={s.backet__image} src={basket} alt="EmptyBasket" />
            <p className={s.backet__title}>Корзина пуста</p>
            <p className={s.backet__subtitle}>Но это никогда не поздно исправить :)</p>
            <Link href='/'><button className={s.backet__goHome}>В каталог товаров</button></Link>
        </div>
    )
}


export default EmptyBasket;