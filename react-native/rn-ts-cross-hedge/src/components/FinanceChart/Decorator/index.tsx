import React from "react";
import { Circle, G } from "react-native-svg";
import { connect, DispatchProp } from "react-redux";
import { colors } from "../../../constants/colors";
import { setSelectedChartElement } from "../../../redux/actions/financeChart";
import { FinanceChartItem } from "../index";

interface DecoratorProps {
    x: (val: number) => string | number | undefined;
    y: (val: number) => string | number | undefined;
    data: number[];
    chartData: FinanceChartItem[];
}

type ComponentProps = DecoratorProps & DispatchProp;

class FinanceChartDecorator extends React.PureComponent<ComponentProps> {
    render() {
        return (
            <React.Fragment>
                {this.props.data.map((value, index) => (
                    <G
                        key={index}
                        onPress={() => this.setSelectedItem(index)}
                        x={this.props.x!(index)}
                        y={this.props.y!(value)}
                    >
                        <Circle
                            cx={0}
                            cy={0}
                            r={8}
                            stroke={colors.activeButton}
                            strokeWidth={3}
                            fill={"white"}
                        />
                    </G>
                ))}
            </React.Fragment>
        );
    }

    setSelectedItem = (index: number) =>
        this.props.dispatch(
            setSelectedChartElement(this.props.chartData[index])
        );
}

export default connect()(FinanceChartDecorator);
