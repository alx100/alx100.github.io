import { ReduxAction } from "../../../types/action";
import { SET_REG_TYPE, SET_USER_ID } from "../../constants";

export type RegistrationTypes = "full" | "partly";

export interface UserStore {
    user_id: string;
    reg_type: RegistrationTypes | undefined;
}

const initialState: UserStore = {
    user_id: "",
    reg_type: undefined
};

export interface UserPayload {
    user_id?: string;
    reg_type?: RegistrationTypes;
}

export default function user(
    state = initialState,
    action: ReduxAction<UserPayload>
) {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                user_id: action.payload!.user_id
            };

        case SET_REG_TYPE:
            return {
                ...state,
                reg_type: action.payload!.reg_type
            };

        default:
            return state;
    }
}
