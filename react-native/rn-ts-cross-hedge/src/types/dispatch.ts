import { DispatchProp } from "react-redux";
import { Dispatch } from "redux";

export interface AsyncDispatcher extends DispatchProp {
    dispatch: Dispatch | any;
}
