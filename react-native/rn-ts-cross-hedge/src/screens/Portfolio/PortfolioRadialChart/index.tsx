import React from "react";
import { Text, View } from "react-native";
import CircularProgressChart from "../../../components/CircularProgress/index";
import { RH } from "../../../constants/window";
import { theme } from "./theme";

interface OwnProps {
    chartContent: string;
    description: string;
    fill: number;
}

export type PortfolioRadialChartProps = OwnProps;

const PortfolioRadialChart = (props: PortfolioRadialChartProps) => (
    <View style={theme.wrapper}>
        <View style={theme.chartWrapper}>
            <CircularProgressChart
                size={4 * RH}
                width={5}
                fill={props.fill < 1 ? props.fill * 100 : props.fill}
                rotation={0}
                tintColor="#4FE4EC"
                duration={1000}
            />
            <Text style={theme.chartContent}>{props.chartContent}</Text>
        </View>
        <Text style={theme.description}>{props.description.toUpperCase()}</Text>
    </View>
);

export default PortfolioRadialChart;
