import { Action } from "redux";
import { ReduxAction } from "../../types/action";
import { CLEAR_CURRENT_ERROR, PARSE_CURRENT_ERROR } from "../constants/index";
import { ErrorHandlerPayload } from "../reducers/errorHandlerReducer";

// The parseErrors is the simple method that allows you to parse any predicted errors in any method.
// You need to pass the error message and the dictionary of handlers to it. If the e.message equals to one of
// the handlers's keys, the handler message will be set to the state.
//
// Also you can provide optional method that will be called onse the notification is closed. Use the
// optional onClose field to pass the method to the state.

export function parseErrors(
    payload: ErrorHandlerPayload
): ReduxAction<ErrorHandlerPayload> {
    return {
        type: PARSE_CURRENT_ERROR,
        payload
    };
}

export function clearErrors(): Action {
    return {
        type: CLEAR_CURRENT_ERROR
    };
}
