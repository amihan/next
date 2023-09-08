
import { useQuery } from '@tanstack/react-query';
import ProductsService from '@/services/products'


export const useProducts = () => {
    return useQuery(['product'], () => ProductsService.getAll(), {
        select: ({ data }) => data
    })
}