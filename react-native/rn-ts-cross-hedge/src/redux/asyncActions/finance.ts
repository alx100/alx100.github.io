import { Dispatch } from "redux";
import {
    fetchProfileBalance as getProfileBalance,
    ProfileBalanceRequest,
    ProfileBalanceResponse
} from "../../api/resources";
import { setProfileBalance } from "../actions/finance";

export const fetchProfileBalance = (
    financeData: ProfileBalanceRequest
) => async (dispatch: Dispatch) => {
    const res: ProfileBalanceResponse = await getProfileBalance({
        ...financeData
    });

    dispatch(setProfileBalance({ balance: res.balance }));
};
