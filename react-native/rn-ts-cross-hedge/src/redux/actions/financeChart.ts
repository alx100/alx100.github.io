import { FinanceChartItem } from "../../components/FinanceChart/index";
import { ReduxAction } from "../../types/action";
import { SET_SELECTED_CHART_ELEMENT } from "../constants";

export function setSelectedChartElement(
    payload: FinanceChartItem
): ReduxAction<FinanceChartItem> {
    return {
        type: SET_SELECTED_CHART_ELEMENT,
        payload
    };
}
