import { Dispatch } from "redux";
import {
    fetchActivitiesOperations,
    OperationsResponse
} from "../../api/resources";
import { getOperationList } from "../actions/activities";

export const fetchOperations = () => async (dispatch: Dispatch) => {
    const res: OperationsResponse = await fetchActivitiesOperations();

    dispatch(getOperationList(res));
};
