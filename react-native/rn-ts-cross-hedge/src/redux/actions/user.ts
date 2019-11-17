import { Omit } from "../../types/omit";
import { SET_REG_TYPE, SET_USER_ID } from "../constants/index";
import { UserPayload } from "../reducers/userReducer/index";

export function setUserId(payload: Omit<UserPayload, "reg_type">) {
    return {
        type: SET_USER_ID,
        payload
    };
}

export function setRegType(payload: Omit<UserPayload, "user_id">) {
    return {
        type: SET_REG_TYPE,
        payload
    };
}
