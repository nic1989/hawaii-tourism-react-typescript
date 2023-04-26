import { HighLight } from "../../models/highlight"
import { ActionTypes } from "../constants/action-types"

export const setHighlights = (data: HighLight[]) => {
    return {
        type: ActionTypes.HIGHLIGHTS_LIST,
        payload: data
    }
}