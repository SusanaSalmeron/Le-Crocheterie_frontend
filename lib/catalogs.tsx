import axios from "axios";
import { getAuthHeaders } from "./clientUtils";

const catalogsUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/catalogs`

export async function getCatalogs() {
    let catalogs = null
    try {
        const response = await axios.get(catalogsUrl, getAuthHeaders())
        catalogs = response.data
    } catch (err: any) {
        if (err.response?.status === 404) {
            catalogs = {}
        } else {
            console.log("Error when getting catalogs", err.message)
        }
    }
    return catalogs
}