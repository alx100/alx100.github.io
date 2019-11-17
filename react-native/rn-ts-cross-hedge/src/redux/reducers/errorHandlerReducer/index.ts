import { ReduxAction } from "../../../types/action";
import { CLEAR_CURRENT_ERROR, PARSE_CURRENT_ERROR } from "../../constants";

interface Notification {
    msg: string;
    onClose?: () => void;
}

export interface ErrorHandlerStore {
    notification: Notification;
}

export interface ErrorHandlerPayload {
    currentErrMsg: string;
    handlersList: Record<string, Notification>;
}

const initialState: ErrorHandlerStore = {
    notification: {
        msg: ""
    }
};

export default function errorHandler(
    state = initialState,
    action: ReduxAction<ErrorHandlerPayload>
) {
    switch (action.type) {
        case PARSE_CURRENT_ERROR:
            const notification: Notification = Object.keys(
                action.payload!.handlersList
            ).some(el => el === action.payload!.currentErrMsg)
                ? action.payload!.handlersList[action.payload!.currentErrMsg]
                : {
                      msg:
                          "Unhandled server error. \n\nPlease, contact admin@cross-hedge.com or try again later."
                  };

            return {
                ...state,
                notification
            };

        case CLEAR_CURRENT_ERROR:
            return initialState;

        default:
            return state;
    }
}
