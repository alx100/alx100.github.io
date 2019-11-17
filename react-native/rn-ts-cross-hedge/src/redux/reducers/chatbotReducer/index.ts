import { Action } from "redux";
import { SET_CHATBOT_COMPLETED } from "../../constants";

export interface ChatbotStore {
    isCompleted: boolean;
}

const initialState: ChatbotStore = {
    isCompleted: false
};

export default function chatbot(state = initialState, action: Action) {
    switch (action.type) {
        case SET_CHATBOT_COMPLETED:
            return {
                ...state,
                isCompleted: true
            };
        default:
            return state;
    }
}
