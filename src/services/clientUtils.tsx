

export const getHeaders = () => {
    return {
        headers: {
            "Content-Type": "application/json"
        }
    }
}

export const getAuthHeaders = () => {
    return { ...getHeaders(), ...{ "x-api-key": process.env.REACT_APP_API_KEY } }
}