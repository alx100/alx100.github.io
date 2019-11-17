import { ReduxAction } from "../../types/action";
import { FETCH_OPERATIONS, SHOW_ACTIVITIES_BALANCE } from "../constants";
import { SHOW_ACTIVITIES_NEWS } from "../constants/index";
import { ActivitiesPayload } from "../reducers/activitiesReducer";

export function getOperationList(
    payload: ActivitiesPayload
): ReduxAction<ActivitiesPayload> {
    return {
        type: FETCH_OPERATIONS,
        payload
    };
}

export function showActivitiesNews(): ReduxAction<never> {
    return {
        type: SHOW_ACTIVITIES_NEWS
    };
}

export function showActivitiesBalance(): ReduxAction<never> {
    return {
        type: SHOW_ACTIVITIES_BALANCE
    };
}
