import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import BottomBar from "../BottomBar";
import DatePicker from "../DatePicker";
import Block from "../InnerPagesBlock";
import LinearChart from "../LineChart";
import PortfolioTypeDescription, {
    PortfolioTypeDescriptionProps
} from "./DescriptionBlock";
import { theme } from "./theme";

interface OwnProps {
    onDateChange: (range: number) => void;
    chartData: {
        data: number[];
        XAxisContent: string[];
    };
    descriptionProps: PortfolioTypeDescriptionProps;
}

class PortfolioTypeTemplate extends React.PureComponent<OwnProps> {
    render() {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: colors.backgroundLight }}
            >
                <ScrollView contentContainerStyle={theme.wrapper}>
                    <Block>
                        <DatePicker loadData={this.props.onDateChange} />
                        <LinearChart {...this.props.chartData} />
                    </Block>
                    <PortfolioTypeDescription
                        {...this.props.descriptionProps}
                    />
                </ScrollView>
                <BottomBar screen={"Portfolio"} />
            </SafeAreaView>
        );
    }
}

export default PortfolioTypeTemplate;
