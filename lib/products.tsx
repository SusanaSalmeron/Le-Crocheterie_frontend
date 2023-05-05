import axios from 'axios';
import { getAuthHeaders } from './clientUtils';

const productsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/products`

export async function getAllProducts() {
    return getProductsWith({})
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