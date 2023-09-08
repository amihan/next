'use client'
import { IProducts } from "@/types/cart.interface"
import axios from "axios"


class ProductsService {
    private URL = 'https://dummyjson.com'

    async getAll() {
        return axios.get<IProducts>(`${this.URL}/products`)
    }
}

export default new ProductsService()