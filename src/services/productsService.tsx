import axios from 'axios'


const headers = {
    "Content-Type": "application/json",
    "x-api-key": "Y7iRBcofzcaUq9PBZr2SB1k9rISDYnAa3EFYYf5c"
}

const baseUrl = 'https://5bqtt27we5.execute-api.eu-central-1.amazonaws.com/dev/v1/products'


export async function getAllProducts() {
    let products = null
    try {
        const response = await axios.get(baseUrl, { headers })
        products = response.data
    } catch (err: any) {
        console.log('Error', err.message)
        products = err.response
    }
    return products
}

export async function getProductBy(id: string) {
    let product = null
    const requestParams = { ...{ headers }, ...{ params: { id: id } } }
    try {
        const response = await axios.get(`${baseUrl}/${id}`, requestParams)
        product = response.data
    } catch (err: any) {
        console.log('Error', err.message)
        product = err.response
    }
    console.log(product)
    return product
}