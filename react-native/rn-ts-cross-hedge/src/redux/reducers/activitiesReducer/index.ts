import { OperationsResponse } from "../../../api/resources";
import { ReduxAction } from "../../../types/action";
import {
    FETCH_OPERATIONS,
    SHOW_ACTIVITIES_BALANCE,
    SHOW_ACTIVITIES_NEWS
} from "../../constants";

export interface ActivitiesStore {
    operationList: OperationsResponse | undefined;
    showNews: boolean;
    showBalanse: boolean;
}

export type ActivitiesPayload = OperationsResponse;

const initialState: ActivitiesStore = {
    operationList: undefined,
    showNews: false,
    showBalanse: false
};

export default function activities(
    state = initialState,
    action: ReduxAction<ActivitiesPayload>
) {
    switch (action.type) {
        case FETCH_OPERATIONS:
            return {
                ...state,
                operationList: action.payload
            };

        case SHOW_ACTIVITIES_NEWS:
            return {
                ...state,
                showNews: !state.showNews
            };

        case SHOW_ACTIVITIES_BALANCE:
            return {
                ...state,
                showBalanse: !state.showBalanse
            };

        default:
            return state;
    }
}
