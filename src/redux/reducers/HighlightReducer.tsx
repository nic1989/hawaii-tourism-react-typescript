import { ActionTypes } from "../constants/action-types";

export const hightLightReducer = (state = [], action: any) => {
    switch (action.type) {
        case ActionTypes.HIGHLIGHTS_LIST:
            return {...state, highlights: action.payload}
        default:
            return state;
    }
}