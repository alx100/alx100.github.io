import { Dispatch } from "redux";
import { login, LoginRequest } from "../../api/resources";
import { LoginResponse } from "../../api/resources/index";
import { setUserId } from "../actions/user";

export const loginUser = (loginData: LoginRequest) => async (
    dispatch: Dispatch
) => {
    const res: LoginResponse = await login({ ...loginData });

    dispatch(setUserId({ user_id: res.user_id }));
};
