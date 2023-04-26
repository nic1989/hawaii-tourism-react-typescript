import { Activity } from "../../models/activity"
import { ActionTypes } from "../constants/action-types"

export const setActivities = (data: Activity[]) => {
    return {
        type: ActionTypes.ACTIVITIES_LIST,
        payload: data
    }
}