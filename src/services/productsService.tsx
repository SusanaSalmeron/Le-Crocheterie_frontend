import axios from 'axios'


const getHeaders = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "Y7iRBcofzcaUq9PBZr2SB1k9rISDYnAa3EFYYf5c"
        }
    }
}

const baseUrl = 'https://5bqtt27we5.execute-api.eu-central-1.amazonaws.com/dev/v1'
const productsUrl = `${baseUrl}/products`


export async function getAllProducts() {
    let products = null
    try {
        const response = await axios.get(productsUrl, getHeaders())
        products = response.data
    } catch (err: any) {
        console.log('Error', err.message)
        products = err.response
    }
    return products ? products : []
}

export async function getProductBy(id: string) {
    let product = null
    try {
        const response = await axios.get(`${productsUrl}/${id}`, getHeaders())
        console.log(response)
        product = response.data
    } catch (err: any) {
        console.log('Error', err.message)
        product = err.response
    }
    return product ? product : {}
}

export async function getProductsBy(categories: string) {
    let products = null
    const requestParams = { ...getHeaders(), ...{ params: { categories } } }
    try {
        const response = await axios.get(`${productsUrl}`, requestParams)
        products = response.data
    } catch (err: any) {
        console.log('Error', err.message)
        products = err.response
    }
    return products ? products : []
}