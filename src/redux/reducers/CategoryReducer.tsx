import { ActionTypes } from "../constants/action-types";

export const categoryReducer = (state = [], action: any) => {
    switch (action.type) {
        case ActionTypes.CATEGORIES_LIST:
            return {...state, categories: action.payload}
        default:
            return state;
    }
}