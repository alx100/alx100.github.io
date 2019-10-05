import * as shape from "d3-shape";
import React from "react";
import { View } from "react-native";
import { Path } from "react-native-svg";
import { AreaChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { RFS } from "../../constants/window";
import FinanceChartDecorator from "./Decorator";
import { theme } from "./theme";

export interface FinanceChartItem {
    value: number;
    percentage: string;
    year: number;
}

export interface FinanceChartProps {
    data: FinanceChartItem[];
}

interface State {
    chartData: number[];
    xAxisData: number[];
}

class FinanceChart extends React.PureComponent<FinanceChartProps, State> {
    state: State = {
        chartData: [],
        xAxisData: []
    };

    componentDidMount() {
        const chartData: number[] = [];
        const xAxisData: number[] = [];

        this.props.data.map(el => {
            chartData.push(el.value);
            xAxisData.push(el.year);
        });

        this.setState({
            chartData,
            xAxisData
        });
    }
    render() {
        const Line = ({ line }) => (
            <Path
                key={"line"}
                d={line}
                stroke={"rgba(79, 228, 236, 1)"}
                strokeWidth={2}
                strokeDasharray={[4, 4]}
                fill={"none"}
            />
        );

        return (
            <React.Fragment>
                <View style={theme.wrapper}>
                    <YAxis
                        data={this.state.chartData}
                        contentInset={{
                            left: 8,
                            right: 8,
                            top: 8,
                            bottom: 8
                        }}
                        svg={{
                            fill: "grey",
                            fontSize: 1.2 * RFS
                        }}
                        numberOfTicks={4}
                        formatLabel={value => `${value}%`}
                        style={theme.YAxis}
                    />
                    <AreaChart
                        style={theme.chart}
                        data={this.state.chartData}
                        contentInset={{
                            top: 10,
                            bottom: 10,
                            right: 10,
                            left: 10
                        }}
                        curve={shape.curveNatural}
                        svg={{ fill: "rgba(79, 228, 236, 0.2)" }}
                        numberOfTicks={4}
                    >
                        <Grid belowChart={true} />
                        <Line line={(val: any) => val} />
                        <FinanceChartDecorator
                            chartData={this.props.data}
                            data={this.state.chartData}
                            x={val => val}
                            y={val => val}
                        />
                    </AreaChart>
                </View>
                <View style={theme.bottomWrapper}>
                    <View style={theme.divider} />
                    <XAxis
                        data={this.state.xAxisData}
                        formatLabel={(value, index) =>
                            this.state.xAxisData[index]
                        }
                        contentInset={{ left: 40, right: 10 }}
                        svg={{ fontSize: 12, fill: "grey" }}
                    />
                </View>
            </React.Fragment>
        );
    }
}

export default FinanceChart;
