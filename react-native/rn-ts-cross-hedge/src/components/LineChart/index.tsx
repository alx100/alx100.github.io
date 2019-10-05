import React from "react";
import { View } from "react-native";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import { colors } from "../../constants/colors";
import ChartDecorator from "./ChartDecorator";
import { theme } from "./theme";

export interface LinearChartData {
    data: number[];
    XAxisContent: string[];
}

class LinearChart extends React.PureComponent<LinearChartData> {
    render() {
        return (
            <React.Fragment>
                <View style={theme.wrapper}>
                    <YAxis
                        data={this.props.data}
                        contentInset={{
                            left: 8,
                            right: 8,
                            top: 15,
                            bottom: 15
                        }}
                        svg={{
                            fill: "grey",
                            fontSize: 12
                        }}
                        numberOfTicks={5}
                        formatLabel={value => `${value}%`}
                    />
                    <LineChart
                        style={theme.chart}
                        data={this.props.data}
                        svg={{ stroke: colors.activeButton, strokeWidth: 3 }}
                        contentInset={{
                            left: 8,
                            right: 8,
                            top: 15,
                            bottom: 15
                        }}
                        numberOfTicks={5}
                    >
                        <Grid />
                        <ChartDecorator
                            data={this.props.data}
                            x={val => val}
                            y={val => val}
                        />
                    </LineChart>
                </View>
                <View>
                    <View style={theme.divider} />
                    <XAxis
                        style={theme.XAxis}
                        data={this.props.data}
                        formatLabel={(value, index) =>
                            this.props.XAxisContent[index]
                                ? this.props.XAxisContent[index]
                                : value
                        }
                        contentInset={{ left: 12, right: 12 }}
                        svg={{ fontSize: 12, fill: "grey" }}
                    />
                </View>
            </React.Fragment>
        );
    }
}

export default LinearChart;
