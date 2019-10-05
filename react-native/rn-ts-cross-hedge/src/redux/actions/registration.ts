import { SET_PHONE_RESTORATION } from "../constants/index";
import { RegistrationPayload } from "../reducers/registrationReducer";

export function isPhoneRestoration(payload: RegistrationPayload) {
    return {
        type: SET_PHONE_RESTORATION,
        payload
    };
}
