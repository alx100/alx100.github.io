import React from "react";
import { Circle } from "react-native-svg";
import { colors } from "../../../constants/colors";

interface DecoratorProps {
    x: (val: number) => string | number | undefined;
    y: (val: number) => string | number | undefined;
    data: number[];
}

const ChartDecorator = (props: DecoratorProps) => {
    return (
        <React.Fragment>
            {props.data.map((value, index) => (
                <Circle
                    key={index}
                    cx={props.x!(index)}
                    cy={props.y!(value)}
                    r={6}
                    stroke={colors.activeButton}
                    strokeWidth={2}
                    fill={"white"}
                />
            ))}
        </React.Fragment>
    );
};

export default ChartDecorator;
