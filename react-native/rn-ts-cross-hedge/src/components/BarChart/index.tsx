import React from "react";
import { Text, View } from "react-native";
import { theme } from "./theme";

interface OwnProps {
    description: string;
    fill: number;
    chartContent?: string;
}

const BarChart = (props: OwnProps) => (
    <View style={theme.wrapper}>
        <Text style={theme.barPercentage}>
            {props.chartContent ? props.chartContent : "0%"}
        </Text>
        <View style={theme.barWrapper}>
            <View style={[theme.barFill, { height: `${props.fill * 100}%` }]} />
        </View>
        <Text style={theme.description}>{props.description.toUpperCase()}</Text>
    </View>
);

export default BarChart;
