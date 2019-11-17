import { SET_PROFILE_BALANCE } from "../constants/index";
import { FinanceStore } from "../reducers/financeReducer/index";

export function setProfileBalance(payload: FinanceStore) {
    return {
        type: SET_PROFILE_BALANCE,
        payload
    };
}
