import { ActionTypes } from "../constants/action-types";

export const activityReducer = (state = [], action: any) => {
    switch (action.type) {
        case ActionTypes.ACTIVITIES_LIST:
            return {...state, activities: action.payload}
        default:
            return state;
    }
}