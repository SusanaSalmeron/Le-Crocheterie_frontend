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
    return getProductsWith({})
}

export async function getProductsBy(categories: string) {
    return getProductsWith({ categories })
}

async function getProductsWith(params: {}) {
    let products = null
    const requestParams = { ...getHeaders(), ...{ params: params } }
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
        const response = await axios.get(`${productsUrl}/${id}`, getHeaders())
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
