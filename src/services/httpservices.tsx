import axios from "axios"
import { convertToTitle, API_URL } from "../utils/utils";

export const getHighlightData = async () => {
    const response: any = await axios.get(`${API_URL}/v1/highlights`)
        .catch((err) => {
            console.log('Error', err)
        });
        return response.data;
}

export const getCategoriesData = async () => {
    const response: any = await axios.get(`${API_URL}/v1/categories`)
        .catch((err) => {
            console.log('Error', err)
        });
    return response.data;
}

export const getActivityType = async (activity_type: string) => {
    const response: any = await axios.get(`${API_URL}/v1/activities/${convertToTitle(activity_type)}`)
        .catch((err) => {
            console.log('Error', err)
        });
    return response.data;
}