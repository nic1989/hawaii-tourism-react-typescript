import { Category } from "../../models/category"
import { ActionTypes } from "../constants/action-types"

export const setCategories = (data: Category[]) => {
    return {
        type: ActionTypes.CATEGORIES_LIST,
        payload: data
    }
}