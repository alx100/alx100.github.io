import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../constants/colors";
import { theme } from "./theme";

export interface StepItemProps {
    isFilled?: boolean;
    hideVerticalLine?: boolean;
    title: string;
    additionalContent?: React.ReactNode;
}

const StepItem = (props: StepItemProps) => (
    <View style={theme.wrapper}>
        <View style={theme.roundWrapper}>
            <View
                style={[
                    theme.outerRound,
                    props.isFilled ? { borderColor: colors.white } : {}
                ]}
            >
                {props.isFilled ? <View style={theme.innerRound} /> : null}
            </View>
            {props.hideVerticalLine ? null : (
                <View style={theme.verticalLine} />
            )}
        </View>
        <View style={theme.contentWrapper}>
            <Text style={theme.title}>{props.title}</Text>
            {props.additionalContent ? props.additionalContent : null}
        </View>
    </View>
);

export default StepItem;
