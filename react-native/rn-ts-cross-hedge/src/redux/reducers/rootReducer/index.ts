import { Action, combineReducers } from "redux";
import activities from "../activitiesReducer";
import chatbot from "../chatbotReducer";
import errorHandler from "../errorHandlerReducer";
import financeChart from "../financeChartReducer";
import finance from "../financeReducer";
import locale from "../localeReducer/index";
import menu from "../menuReducer";
import modal from "../modalReducer";
import registration from "../registrationReducer";
import user from "../userReducer";

const initialState: any = {};

function rootReducer(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    rootReducer,
    modal,
    locale,
    menu,
    activities,
    registration,
    chatbot,
    financeChart,
    errorHandler,
    user,
    finance
});
