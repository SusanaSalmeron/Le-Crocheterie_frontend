import axios from 'axios'


const headers = {
    'Content-Type': 'application/json',
    "x-api-key": "Y7iRBcofzcaUq9PBZr2SB1k9rISDYnAa3EFYYf5c",
    "Access-Control-Allow-Origin": "true"
}


export async function getAllProducts() {
    let request = null
    try {
        const response = await axios.get('https://5bqtt27we5.execute-api.eu-central-1.amazonaws.com/dev/v1/products', { headers })
        request = response.data
    } catch (err: any) {
        console.log('Error', err.message)
        request = err.response
    }
    return request
}