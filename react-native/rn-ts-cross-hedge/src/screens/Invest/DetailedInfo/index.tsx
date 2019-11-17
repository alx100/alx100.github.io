import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { FinanceChartStore } from "../../../redux/reducers/financeChartReducer/index";
import { theme } from "./theme";

interface StoreProps {
    financeChart: FinanceChartStore;
}

type ComponentProps = StoreProps;

const FinanceChartDetailedView = (props: ComponentProps) => (
    <View style={theme.wrapper}>
        {!props.financeChart.selectedDetail ? (
            <Text style={theme.title}>
                {"Select a point on the chart \nto reveal detailed info"}
            </Text>
        ) : (
            <React.Fragment>
                <View style={theme.detailedInfoRow}>
                    <Text style={theme.title}>{"Profit:"}</Text>
                    <Text style={theme.title}>
                        {props.financeChart.selectedDetail.value
                            .toString()
                            .concat("k")}
                    </Text>
                </View>
                <View style={theme.detailedInfoRow}>
                    <Text style={theme.title}>{"Percentage:"}</Text>
                    <Text style={theme.title}>
                        {props.financeChart.selectedDetail.percentage.concat(
                            "%"
                        )}
                    </Text>
                </View>
                <View style={theme.detailedInfoRow}>
                    <Text style={theme.title}>{"Year:"}</Text>
                    <Text style={theme.title}>
                        {props.financeChart.selectedDetail.year}
                    </Text>
                </View>
            </React.Fragment>
        )}
    </View>
);

export default connect((store: StoreProps) => ({
    financeChart: store.financeChart
}))(FinanceChartDetailedView);
