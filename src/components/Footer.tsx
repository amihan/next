import Link from 'next/link';
import s from '../style/Footer.module.scss'
import Image from 'next/image';
import language from '@/assets/lang.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <p className={s.footer__logo}>QPICK</p>
            <ul className={s.list}>
                <Link href='/save'><li className={s.list__item}>Избранное</li></Link>
                <Link href='/backet'><li className={s.list__item}>Корзина</li></Link>
                <Link href='/contacnt'><li className={s.list__item}>Контакты</li></Link>
            </ul>
            <div className={s.footer__block}>
                <div className={s.language}>
                    <Image className={s.language__img} src={language} alt="language-image" />
                    <div className={s.language__option}>
                        <span className={s.language__ru}>РУС</span>
                        <span className={s.language__en}>ENG</span>
                    </div>
                </div>
            </div>
            <div></div>
        </footer>
    )
}


export default Footer;