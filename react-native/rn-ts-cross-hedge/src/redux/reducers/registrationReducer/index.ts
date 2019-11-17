import { ReduxAction } from "../../../types/action";
import { SET_PHONE_RESTORATION } from "../../constants/index";

export interface RegistrationStore {
    phoneRestoreActive: boolean;
}

const initialState: RegistrationStore = {
    phoneRestoreActive: false
};

export type RegistrationPayload = RegistrationStore;

export default function registration(
    state = initialState,
    action: ReduxAction<RegistrationPayload>
) {
    switch (action.type) {
        case SET_PHONE_RESTORATION:
            return {
                ...state,
                phoneRestoreActive: action.payload!.phoneRestoreActive
            };

        default:
            return initialState;
    }
}
