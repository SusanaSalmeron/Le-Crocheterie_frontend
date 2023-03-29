import axios from 'axios';

const getHeaders = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "Y7iRBcofzcaUq9PBZr2SB1k9rISDYnAa3EFYYf5c"
        }
    }
}

const baseUrl = 'https://5bqtt27we5.execute-api.eu-central-1.amazonaws.com/dev/v1'
const catalogsUrl = `${baseUrl}/catalogs`


export async function getCatalogs() {
    let catalogs = null
    try {
        const response = await axios.get(catalogsUrl, getHeaders())
        catalogs = response.data
    } catch (err: any) {
        if (err.response?.status === 404) {
            catalogs = {}
        } else {
            console.log('Error when getting catalogs', err.message)
        }
    }
    return catalogs
}