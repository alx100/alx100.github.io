import { Dispatch } from "redux";
import { ChatBotInfo } from "../../screens/Chatbot/Chat";
import { CHATBOT_INFO } from "../../screens/Chatbot/Chat/index";
import { storage } from "../../services/storage";
import fetchChatbotCompletion from "../actions/chatbot";

export const fetchChatbotData = () => (dispatch: Dispatch): void => {
    storage.getStorageItem<ChatBotInfo>(CHATBOT_INFO).then(res => {
        if (res) {
            if (res.isCompleted) {
                dispatch(fetchChatbotCompletion());
            }

            return;
        }

        return;
    });
};
