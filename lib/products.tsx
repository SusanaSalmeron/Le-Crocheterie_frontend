import axios from 'axios';
import { getAuthHeaders } from './clientUtils';

const productsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/products`

export async function getAllProducts() {
    return getProductsWith({})
}

export async function getProductsBy(categories: any) {
    return getProductsWith({ categories })
}

async function getProductsWith(params: {}) {
    let products = null
    const requestParams = { ...getAuthHeaders(), ...{ params: params } }
    try {
        const response = await axios.get(productsUrl, requestParams)
        products = response.data
    } catch (err: any) {
        if (err.response?.status === 404) {
            products = []
        } else {
            console.log('Error when getting products by category ', err.message)
        }
    }
    return products
}

export async function getProductBy(id: string) {
    let product = null
    try {
        const response = await axios.get(`${productsUrl}/${id}`, getAuthHeaders())
        product = response.data
    } catch (err: any) {
        if (err.response?.status === 404) {
            product = {}
        } else {
            console.log('Error when getting product by id', err.message)
        }
    }
    return product
}