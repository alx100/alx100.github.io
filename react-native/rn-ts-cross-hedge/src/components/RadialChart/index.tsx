import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { ProgressCircle, ProgressCircleProps } from "react-native-svg-charts";
import Amount from "../Amount";
import { theme } from "./theme";

interface OwnProps {
    color?: string;
    content: {
        value: string;
        description: string;
    };
    chartStyle?: ViewStyle;
}

type ComponentProps = OwnProps & ProgressCircleProps;

class RadialChart extends React.PureComponent<ComponentProps> {
    render() {
        return (
            <View style={theme.wrapper}>
                <ProgressCircle
                    {...this.props}
                    style={[theme.chart, this.props.chartStyle]}
                    progressColor={"#9396B5"}
                    backgroundColor={"#CCCED9"}
                    strokeWidth={15}
                />
                <View style={theme.content}>
                    <Amount
                        value={this.props.content.value.toString()}
                        showPlus={true}
                        unit={"€"}
                    />
                    <Text style={theme.description}>
                        {this.props.content.description}
                    </Text>
                </View>
            </View>
        );
    }
}

export default RadialChart;
