'use client'
import s from '@/style/Products.module.scss'
import ProductСard from '@/components/ProductСard';
import { useProducts } from '@/hook/useProducts';


const Products = () => {
    const { data, isLoading, isError } = useProducts()
    console.log('data', data)

    if (isError) {
        return (
            <div>
                Error
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className={s.products}>
            <p className={s.products__title}>Товары</p>
            <div className={s.products__block}>
                {data.products.map(value => <ProductСard {...value} />)}
            </div>
        </div>
    )
}


export default Products;