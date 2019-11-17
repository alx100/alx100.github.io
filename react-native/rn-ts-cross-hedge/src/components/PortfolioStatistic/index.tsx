import React from "react";
import { Image, Text, View } from "react-native";
import Amount from "../Amount";
import { theme } from "./theme";
interface OwnProps {
    value: number;
    unit: string;
    img: any;
    label: string;
    showPlus?: boolean;
}

const PortfolioStatistic = (props: OwnProps) => {
    return (
        <View style={theme.container}>
            <Image source={props.img} style={theme.img} />
            <View style={theme.textContainer}>
                <Text style={theme.text}>{props.label}</Text>
                <Amount
                    value={props.value.toString()}
                    unit={props.unit}
                    showPlus={props.showPlus || true}
                    styles={{
                        integer: theme.text,
                        fractional: theme.text
                    }}
                />
            </View>
        </View>
    );
};

export default PortfolioStatistic;
