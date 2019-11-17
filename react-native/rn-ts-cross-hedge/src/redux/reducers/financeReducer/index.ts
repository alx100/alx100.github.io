import { ReduxAction } from "../../../types/action";
import { SET_PROFILE_BALANCE } from "../../constants";

export interface FinanceStore {
    balance: number | undefined;
}

const initialState: FinanceStore = {
    balance: undefined
};

export default function finance(
    state = initialState,
    action: ReduxAction<FinanceStore>
) {
    switch (action.type) {
        case SET_PROFILE_BALANCE:
            return {
                ...state,
                balance: action.payload!.balance
            };

        default:
            return state;
    }
}
