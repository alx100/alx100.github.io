import { FinanceChartItem } from "../../../components/FinanceChart/index";
import { ReduxAction } from "../../../types/action";
import { SET_SELECTED_CHART_ELEMENT } from "../../constants";

export interface FinanceChartStore {
    selectedDetail: FinanceChartItem | undefined;
}

const initialState: FinanceChartStore = {
    selectedDetail: undefined
};

export default function financeChart(
    state = initialState,
    action: ReduxAction<FinanceChartItem>
) {
    switch (action.type) {
        case SET_SELECTED_CHART_ELEMENT:
            return {
                ...state,
                selectedDetail: action.payload
            };

        default:
            return state;
    }
}
