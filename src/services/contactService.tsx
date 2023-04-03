import axios from 'axios';
import { getAuthHeaders } from './clientUtils';

const contactUrl = `${process.env.REACT_APP_BASE_URL}/contact`

export async function sendContactForm(name: string, topic: string, email: string, content: string) {
    let result = null
    try {
        const body = {
            name,
            topic,
            email,
            content
        }
        const response = await axios.post(contactUrl, body, getAuthHeaders())
        result = response.status
    } catch (err: any) {
        console.log(err)
        if (err.response?.status) {
            result = err.response.status
        }
    }
    return result === 200
}

